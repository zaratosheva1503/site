const crypto = require('crypto');
const http = require('http');
const fs = require('fs');
const path = require('path');
const { Telegraf, Markup } = require('telegraf');
const { PACKS } = require('./data/packs');

const BOT_TOKEN = process.env.BOT_TOKEN || process.env.TELEGRAM_BOT_TOKEN;
const PORT = Number(process.env.PORT || 3000);
const PUBLIC_URL = normalizePublicUrl(process.env.PUBLIC_URL || process.env.WEBAPP_URL || `http://localhost:${PORT}`);
const SPY_IMAGE = process.env.SPY_IMAGE || `${PUBLIC_URL}/assets/cards/spy.svg`;
const packById = new Map(PACKS.map((pack) => [pack.id, pack]));
const botState = { username: process.env.BOT_USERNAME || '' };
const rooms = new Map();
const users = new Map();

function normalizePublicUrl(value) {
  return String(value).replace(/\/$/, '');
}

function makeCode() {
  const alphabet = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
  let code = '';
  for (let index = 0; index < 6; index += 1) {
    code += alphabet[Math.floor(Math.random() * alphabet.length)];
  }
  return rooms.has(code) ? makeCode() : code;
}

function getUser(from) {
  if (!users.has(from.id)) {
    users.set(from.id, {
      id: from.id,
      name: from.first_name || from.username || `Игрок ${from.id}`
    });
  }
  return users.get(from.id);
}

function buildRoom(ownerId) {
  const code = makeCode();
  const room = {
    code,
    ownerId,
    players: [ownerId],
    mode: 'online',
    rounds: 2,
    packIds: ['base'],
    timer: 0,
    spyHints: false,
    spyCantGuess: false,
    phoneVibration: false,
    status: 'lobby',
    currentRound: 0,
    currentPlayerIndex: 0,
    spyId: null,
    card: null,
    order: [],
    votes: new Map()
  };
  rooms.set(code, room);
  return room;
}

function getPlayerName(playerId) {
  return users.get(playerId)?.name || `Игрок ${playerId}`;
}

function getRoomForPlayer(playerId) {
  for (const room of rooms.values()) {
    if (room.players.includes(playerId)) {
      return room;
    }
  }
  return null;
}

function getSelectedCards(room) {
  return room.packIds.flatMap((packId) => packById.get(packId)?.cards || []);
}

function pickRandom(items) {
  return items[Math.floor(Math.random() * items.length)];
}

function shuffle(items) {
  const result = [...items];
  for (let index = result.length - 1; index > 0; index -= 1) {
    const randomIndex = Math.floor(Math.random() * (index + 1));
    [result[index], result[randomIndex]] = [result[randomIndex], result[index]];
  }
  return result;
}

function getRoomLink(code, botUsername) {
  const base = `${PUBLIC_URL}/?join=${encodeURIComponent(code)}`;
  return botUsername ? `${base}&bot=${encodeURIComponent(botUsername)}` : base;
}

function toPublicAsset(value) {
  if (!value) return value;
  if (/^https?:\/\//.test(value)) return value;
  return `${PUBLIC_URL}/${String(value).replace(/^\//, '')}`;
}

function mainMenuKeyboard(botUsername) {
  const webAppUrl = botUsername ? `${PUBLIC_URL}/?bot=${encodeURIComponent(botUsername)}` : PUBLIC_URL;
  return Markup.inlineKeyboard([
    [Markup.button.callback('🕵️ Создать комнату', 'create_room')],
    [Markup.button.webApp('🎮 Открыть игру', webAppUrl)]
  ]);
}

function roomKeyboard(room, botUsername) {
  return Markup.inlineKeyboard([
    [Markup.button.callback('📋 Скопировать код', `copy:${room.code}`), Markup.button.callback('👥 Пригласить', `invite:${room.code}`)],
    [Markup.button.callback('🎒 Выбрать паки', `packs:${room.code}`), Markup.button.callback('⚙️ Настройки', `settings:${room.code}`)],
    [Markup.button.callback('▶️ Начать игру', `start:${room.code}`)],
    [Markup.button.webApp('🌐 Открыть лобби', getRoomLink(room.code, botUsername))],
    [Markup.button.callback('🚪 Покинуть комнату', `leave:${room.code}`)]
  ]);
}

function settingsKeyboard(room) {
  const online = room.mode === 'online' ? '✅ Онлайн' : 'Онлайн';
  const offline = room.mode === 'offline' ? '✅ Офлайн' : 'Офлайн';
  return Markup.inlineKeyboard([
    [Markup.button.callback(online, `mode:${room.code}:online`), Markup.button.callback(offline, `mode:${room.code}:offline`)],
    [1, 2, 3, 4].map((round) => Markup.button.callback(`${room.rounds === round ? '✅ ' : ''}${round}`, `rounds:${room.code}:${round}`)),
    [0, 15, 30, 45, 60].map((seconds) => Markup.button.callback(`${room.timer === seconds ? '✅ ' : ''}${seconds ? `${seconds}с` : 'Выкл'}`, `timer:${room.code}:${seconds}`)),
    [Markup.button.callback(`${room.spyHints ? '✅' : '⬜'} Подсказка для шпиона`, `toggle:${room.code}:spyHints`)],
    [Markup.button.callback(`${room.spyCantGuess ? '✅' : '⬜'} Запретить «я угадал»`, `toggle:${room.code}:spyCantGuess`)],
    [Markup.button.callback(`${room.phoneVibration ? '✅' : '⬜'} Вибрация телефона`, `toggle:${room.code}:phoneVibration`)],
    [Markup.button.callback('⬅️ В лобби', `lobby:${room.code}`)]
  ]);
}

function packsKeyboard(room, page = 0) {
  const perPage = 8;
  const pages = Math.ceil(PACKS.length / perPage);
  const visible = PACKS.slice(page * perPage, page * perPage + perPage);
  const rows = visible.map((pack) => {
    const selected = room.packIds.includes(pack.id) ? '✅' : '⬜';
    return [Markup.button.callback(`${selected} ${pack.emoji} ${pack.title}`, `pack:${room.code}:${pack.id}:${page}`)];
  });
  rows.push([
    Markup.button.callback('◀️', `packs_page:${room.code}:${Math.max(0, page - 1)}`),
    Markup.button.callback(`${page + 1}/${pages}`, `packs:${room.code}`),
    Markup.button.callback('▶️', `packs_page:${room.code}:${Math.min(pages - 1, page + 1)}`)
  ]);
  rows.push([Markup.button.callback('⬅️ В лобби', `lobby:${room.code}`)]);
  return Markup.inlineKeyboard(rows);
}

function formatRoom(room, botUsername) {
  const players = room.players.map((id, index) => `${index + 1}. ${getPlayerName(id)}${id === room.ownerId ? ' 👑' : ''}`).join('\n');
  const packs = room.packIds.map((id) => packById.get(id)?.title).filter(Boolean).join(', ');
  return `Код комнаты\n${room.code}\n\n🎒 Паки: ${packs}\n🎮 ${room.mode === 'online' ? 'Онлайн' : 'Офлайн'} · 🔁 ${room.rounds} круга\n👥 Игроки (${room.players.length}/8)\n${players}\n\nМинимум 3 игрока для старта. По ссылке можно зайти в лобби: ${getRoomLink(room.code, botUsername)}`;
}

function formatSettings(room) {
  return `⚙️ Настройки игры\n${room.mode} · ${room.rounds} круга\n\n⏱ Давление времени: ${room.timer ? `${room.timer}с` : 'выкл'}\n💡 Подсказка для шпиона: ${room.spyHints ? 'вкл' : 'выкл'}\n🚫 Запретить «я угадал»: ${room.spyCantGuess ? 'вкл' : 'выкл'}\n📳 Вибрация телефона: ${room.phoneVibration ? 'вкл' : 'выкл'}`;
}

async function showRoom(ctx, room, botUsername) {
  await ctx.reply(formatRoom(room, botUsername), roomKeyboard(room, botUsername));
}

async function showMain(ctx, botUsername) {
  await ctx.reply('🕵️ Кто шпион\n\nСоздай комнату, выбери паки и пригласи друзей по ссылке или коду.', mainMenuKeyboard(botUsername));
}

async function safeAnswer(ctx, message) {
  if (ctx.callbackQuery) {
    await ctx.answerCbQuery(message).catch(() => {});
  }
}

function requireRoom(code) {
  const room = rooms.get(code);
  if (!room) {
    throw new Error('Комната не найдена.');
  }
  return room;
}

function requireOwner(room, userId) {
  if (room.ownerId !== userId) {
    throw new Error('Менять настройки может только создатель комнаты.');
  }
}

async function sendRole(bot, room, playerId) {
  const isSpy = playerId === room.spyId;
  const title = isSpy ? '🕵️ Ты — шпион' : `🃏 Карта: ${room.card.name}`;
  const body = isSpy
    ? 'Слушай ассоциации игроков и попробуй понять карту. Не выдай себя!'
    : `Твоя задача — говорить ассоциации так, чтобы мирные поняли друг друга, а шпион не догадался.`;
  const keyboard = Markup.inlineKeyboard([
    [Markup.button.callback('Я понял', `ok:${room.code}`)],
    [Markup.button.callback('🎯 Я угадал карту', `guess:${room.code}`)]
  ]);

  if (!isSpy && room.card.image) {
    await bot.telegram.sendPhoto(playerId, room.card.image, { caption: `${title}\n${body}`, ...keyboard }).catch(async () => {
      await bot.telegram.sendMessage(playerId, `${title}\n${body}`, keyboard);
    });
    return;
  }

  if (isSpy && SPY_IMAGE) {
    await bot.telegram.sendPhoto(playerId, toPublicAsset(SPY_IMAGE), { caption: `${title}\n${body}`, ...keyboard }).catch(async () => {
      await bot.telegram.sendMessage(playerId, `${title}\n${body}`, keyboard);
    });
    return;
  }

  await bot.telegram.sendMessage(playerId, `${title}\n${body}`, keyboard);
}

async function beginRound(bot, room) {
  const cards = getSelectedCards(room);
  if (cards.length === 0) {
    throw new Error('Выбери хотя бы один пак.');
  }
  room.status = 'playing';
  room.currentRound += 1;
  room.currentPlayerIndex = 0;
  room.order = shuffle(room.players);
  room.votes = new Map();
  room.card = pickRandom(cards);
  room.spyId = pickRandom(room.players);

  await Promise.all(room.players.map((playerId) => sendRole(bot, room, playerId)));
  await notifyTurn(bot, room);
}

async function notifyTurn(bot, room) {
  const playerId = room.order[room.currentPlayerIndex];
  const message = `Раунд ${room.currentRound}/${room.rounds}\nСейчас говорит: ${getPlayerName(playerId)}\n\nГовори одну ассоциацию к карте.`;
  await Promise.all(room.players.map((id) => bot.telegram.sendMessage(id, message, Markup.inlineKeyboard([
    [Markup.button.callback('✅ Я сказал, передай ход', `next:${room.code}`)],
    [Markup.button.callback('🗳 Открыть голосование', `vote_menu:${room.code}`)]
  ])).catch(() => {})));
}

async function nextTurn(bot, room) {
  room.currentPlayerIndex += 1;
  if (room.currentPlayerIndex >= room.order.length) {
    await openVoting(bot, room);
    return;
  }
  await notifyTurn(bot, room);
}

async function openVoting(bot, room) {
  room.status = 'voting';
  const buttons = room.players.map((id) => [Markup.button.callback(getPlayerName(id), `vote:${room.code}:${id}`)]);
  await Promise.all(room.players.map((id) => bot.telegram.sendMessage(id, '🗳 Голосование: кто шпион?', Markup.inlineKeyboard(buttons)).catch(() => {})));
}

function countVotes(room) {
  const totals = new Map();
  for (const votedId of room.votes.values()) {
    totals.set(votedId, (totals.get(votedId) || 0) + 1);
  }
  let leader = null;
  let score = 0;
  let tie = false;
  for (const [playerId, total] of totals.entries()) {
    if (total > score) {
      leader = playerId;
      score = total;
      tie = false;
    } else if (total === score) {
      tie = true;
    }
  }
  return { leader, score, tie };
}

async function finishVoting(bot, room) {
  const { leader, tie } = countVotes(room);
  const guessedSpy = !tie && Number(leader) === Number(room.spyId);
  const result = tie
    ? `Ничья. Шпион выжил! Карта была: ${room.card.name}`
    : guessedSpy
      ? `Мирные нашли шпиона: ${getPlayerName(room.spyId)}. Карта была: ${room.card.name}`
      : `Шпион победил! Вы выбрали ${getPlayerName(Number(leader))}, а шпион был ${getPlayerName(room.spyId)}. Карта была: ${room.card.name}`;

  if (room.currentRound >= room.rounds) {
    room.status = 'finished';
    await Promise.all(room.players.map((id) => bot.telegram.sendMessage(id, `${result}\n\nИгра окончена.`, roomKeyboard(room, botState.username)).catch(() => {})));
    room.status = 'lobby';
    room.currentRound = 0;
    return;
  }

  await Promise.all(room.players.map((id) => bot.telegram.sendMessage(id, `${result}\n\nГотовим следующий раунд...`).catch(() => {})));
  await beginRound(bot, room);
}


async function handleTextMessage(bot, ctx) {
  const room = getRoomForPlayer(ctx.from.id);
  if (!room || room.status !== 'playing' || ctx.from.id !== room.spyId || room.spyCantGuess || !room.card) {
    return;
  }
  const guess = normalizeGuess(ctx.message.text);
  if (!guess) return;
  if (guess === normalizeGuess(room.card.name)) {
    room.status = 'finished';
    await Promise.all(room.players.map((id) => bot.telegram.sendMessage(id, `🕵️ Шпион ${getPlayerName(room.spyId)} угадал карту: ${room.card.name}. Шпион победил!`, roomKeyboard(room, botState.username)).catch(() => {})));
    room.status = 'lobby';
    room.currentRound = 0;
  } else {
    await ctx.reply('Не угадал. Продолжай слушать ассоциации.');
  }
}

function normalizeGuess(value) {
  return String(value || '').trim().toLowerCase().replace(/ё/g, 'е').replace(/[^a-zа-я0-9]+/gi, '');
}

function setupBot() {
  if (!BOT_TOKEN) {
    return null;
  }

  const bot = new Telegraf(BOT_TOKEN);

  bot.start(async (ctx) => {
    const user = getUser(ctx.from);
    const payload = String(ctx.startPayload || '').toUpperCase();
    if (payload && rooms.has(payload)) {
      const room = rooms.get(payload);
      if (room.status === 'lobby' && !room.players.includes(user.id) && room.players.length < 8) {
        room.players.push(user.id);
      }
      await showRoom(ctx, room, botState.username);
      return;
    }
    await showMain(ctx, botState.username);
  });

  bot.command('join', async (ctx) => {
    const user = getUser(ctx.from);
    const code = ctx.message.text.split(/\s+/)[1]?.toUpperCase();
    if (!code || !rooms.has(code)) {
      await ctx.reply('Комната не найдена. Отправь /join КОД или зайди по ссылке.');
      return;
    }
    const room = rooms.get(code);
    if (room.status === 'lobby' && !room.players.includes(user.id) && room.players.length < 8) {
      room.players.push(user.id);
    }
    await showRoom(ctx, room, botState.username);
  });

  bot.action('create_room', async (ctx) => {
    const user = getUser(ctx.from);
    const existing = getRoomForPlayer(user.id);
    const room = existing || buildRoom(user.id);
    await safeAnswer(ctx);
    await showRoom(ctx, room, botState.username);
  });

  bot.action(/^copy:(.+)$/, async (ctx) => {
    await safeAnswer(ctx, ctx.match[1]);
  });

  bot.action(/^invite:(.+)$/, async (ctx) => {
    const room = requireRoom(ctx.match[1]);
    await safeAnswer(ctx);
    const telegramLink = botState.username ? `https://t.me/${botState.username}?start=${room.code}` : '';
    await ctx.reply(`Приглашение в игру:\n${getRoomLink(room.code, botState.username)}${telegramLink ? `\n${telegramLink}` : ''}\n\nИли код: ${room.code}`);
  });

  bot.action(/^lobby:(.+)$/, async (ctx) => {
    await safeAnswer(ctx);
    await showRoom(ctx, requireRoom(ctx.match[1]), botState.username);
  });

  bot.action(/^settings:(.+)$/, async (ctx) => {
    const room = requireRoom(ctx.match[1]);
    await safeAnswer(ctx);
    await ctx.reply(formatSettings(room), settingsKeyboard(room));
  });

  bot.action(/^mode:(.+):(online|offline)$/, async (ctx) => {
    const room = requireRoom(ctx.match[1]);
    requireOwner(room, ctx.from.id);
    room.mode = ctx.match[2];
    await safeAnswer(ctx);
    await ctx.editMessageText(formatSettings(room), settingsKeyboard(room)).catch(() => ctx.reply(formatSettings(room), settingsKeyboard(room)));
  });

  bot.action(/^rounds:(.+):(\d+)$/, async (ctx) => {
    const room = requireRoom(ctx.match[1]);
    requireOwner(room, ctx.from.id);
    room.rounds = Number(ctx.match[2]);
    await safeAnswer(ctx);
    await ctx.editMessageText(formatSettings(room), settingsKeyboard(room)).catch(() => ctx.reply(formatSettings(room), settingsKeyboard(room)));
  });

  bot.action(/^timer:(.+):(\d+)$/, async (ctx) => {
    const room = requireRoom(ctx.match[1]);
    requireOwner(room, ctx.from.id);
    room.timer = Number(ctx.match[2]);
    await safeAnswer(ctx);
    await ctx.editMessageText(formatSettings(room), settingsKeyboard(room)).catch(() => ctx.reply(formatSettings(room), settingsKeyboard(room)));
  });

  bot.action(/^toggle:(.+):(spyHints|spyCantGuess|phoneVibration)$/, async (ctx) => {
    const room = requireRoom(ctx.match[1]);
    requireOwner(room, ctx.from.id);
    room[ctx.match[2]] = !room[ctx.match[2]];
    await safeAnswer(ctx);
    await ctx.editMessageText(formatSettings(room), settingsKeyboard(room)).catch(() => ctx.reply(formatSettings(room), settingsKeyboard(room)));
  });

  bot.action(/^packs:(.+)$/, async (ctx) => {
    await safeAnswer(ctx);
    await ctx.reply('🎒 Выбери паки для игры:', packsKeyboard(requireRoom(ctx.match[1])));
  });

  bot.action(/^packs_page:(.+):(\d+)$/, async (ctx) => {
    await safeAnswer(ctx);
    const room = requireRoom(ctx.match[1]);
    await ctx.editMessageReplyMarkup(packsKeyboard(room, Number(ctx.match[2])).reply_markup).catch(() => {});
  });

  bot.action(/^pack:(.+):([^:]+):(\d+)$/, async (ctx) => {
    const room = requireRoom(ctx.match[1]);
    requireOwner(room, ctx.from.id);
    const packId = ctx.match[2];
    if (room.packIds.includes(packId)) {
      if (room.packIds.length > 1) {
        room.packIds = room.packIds.filter((id) => id !== packId);
      }
    } else {
      room.packIds.push(packId);
    }
    await safeAnswer(ctx);
    await ctx.editMessageReplyMarkup(packsKeyboard(room, Number(ctx.match[3])).reply_markup).catch(() => {});
  });

  bot.action(/^start:(.+)$/, async (ctx) => {
    const room = requireRoom(ctx.match[1]);
    requireOwner(room, ctx.from.id);
    if (room.players.length < 3) {
      await safeAnswer(ctx, 'Минимум 3 игрока');
      return;
    }
    await safeAnswer(ctx);
    await beginRound(bot, room);
  });

  bot.action(/^ok:(.+)$/, async (ctx) => safeAnswer(ctx, 'Удачной игры!'));

  bot.action(/^next:(.+)$/, async (ctx) => {
    const room = requireRoom(ctx.match[1]);
    if (room.status !== 'playing') {
      await safeAnswer(ctx, 'Сейчас не ход ассоциаций');
      return;
    }
    await safeAnswer(ctx);
    await nextTurn(bot, room);
  });

  bot.action(/^vote_menu:(.+)$/, async (ctx) => {
    await safeAnswer(ctx);
    await openVoting(bot, requireRoom(ctx.match[1]));
  });

  bot.action(/^vote:(.+):(\d+)$/, async (ctx) => {
    const room = requireRoom(ctx.match[1]);
    room.votes.set(ctx.from.id, Number(ctx.match[2]));
    await safeAnswer(ctx, 'Голос принят');
    if (room.votes.size >= room.players.length) {
      await finishVoting(bot, room);
    }
  });

  bot.action(/^guess:(.+)$/, async (ctx) => {
    const room = requireRoom(ctx.match[1]);
    if (room.spyCantGuess || ctx.from.id !== room.spyId) {
      await safeAnswer(ctx, 'Недоступно');
      return;
    }
    await safeAnswer(ctx);
    await ctx.reply('Напиши название карты в чат. Если совпадёт — шпион победит.');
  });

  bot.on('text', (ctx) => handleTextMessage(bot, ctx));

  bot.action(/^leave:(.+)$/, async (ctx) => {
    const room = requireRoom(ctx.match[1]);
    room.players = room.players.filter((id) => id !== ctx.from.id);
    if (room.ownerId === ctx.from.id && room.players.length > 0) {
      room.ownerId = room.players[0];
    }
    if (room.players.length === 0) {
      rooms.delete(room.code);
    }
    await safeAnswer(ctx);
    await showMain(ctx, botState.username);
  });

  bot.telegram.getMe().then((me) => { botState.username = me.username || botState.username; }).catch(() => {});

  bot.catch((error, ctx) => {
    console.error(error);
    if (ctx) {
      ctx.reply(error.message || 'Ошибка. Попробуй ещё раз.').catch(() => {});
    }
  });

  return bot;
}

function getApiRoom(code) {
  const room = rooms.get(String(code).toUpperCase());
  if (!room) return null;
  return {
    code: room.code,
    mode: room.mode,
    rounds: room.rounds,
    packIds: room.packIds,
    packs: room.packIds.map((id) => packById.get(id)).filter(Boolean).map((pack) => ({ id: pack.id, title: pack.title, emoji: pack.emoji, cover: toPublicAsset(pack.cover), count: pack.cards.length })),
    players: room.players.map((id) => ({ id, name: getPlayerName(id), owner: id === room.ownerId })),
    status: room.status
  };
}

function createServer(bot) {
  const publicDir = __dirname;
  return http.createServer(async (req, res) => {
    const url = new URL(req.url, PUBLIC_URL);
    if (url.pathname === '/api/packs') {
      sendJson(res, { packs: PACKS.map((pack) => ({ id: pack.id, title: pack.title, emoji: pack.emoji, cover: toPublicAsset(pack.cover), count: pack.cards.length, free: Boolean(pack.free) })) });
      return;
    }
    if (url.pathname === '/api/rooms' && req.method === 'POST') {
      const body = await readBody(req);
      const name = body.name || 'Гость';
      const id = Number(`9${crypto.randomInt(100000, 999999)}`);
      users.set(id, { id, name });
      const room = buildRoom(id);
      sendJson(res, { room: getApiRoom(room.code), playerId: id, link: getRoomLink(room.code, botState.username) });
      return;
    }
    if (url.pathname.match(/^\/api\/rooms\/[^/]+\/join$/) && req.method === 'POST') {
      const code = url.pathname.split('/')[3].toUpperCase();
      const room = rooms.get(code);
      if (!room) {
        sendJson(res, { error: 'Комната не найдена' }, 404);
        return;
      }
      const body = await readBody(req);
      const id = Number(body.playerId || `9${crypto.randomInt(100000, 999999)}`);
      users.set(id, { id, name: body.name || 'Гость' });
      if (room.status !== 'lobby') {
        sendJson(res, { error: 'Игра уже началась' }, 409);
        return;
      }
      if (!room.players.includes(id) && room.players.length < 8) room.players.push(id);
      sendJson(res, { room: getApiRoom(room.code), playerId: id });
      return;
    }
    if (url.pathname.match(/^\/api\/rooms\/[^/]+$/)) {
      const code = url.pathname.split('/')[3].toUpperCase();
      const room = getApiRoom(code);
      if (!room) {
        sendJson(res, { error: 'Комната не найдена' }, 404);
        return;
      }
      sendJson(res, { room });
      return;
    }
    if (url.pathname === '/telegram' && req.method === 'POST' && bot) {
      const body = await readRaw(req);
      await bot.handleUpdate(JSON.parse(body));
      res.writeHead(200).end('ok');
      return;
    }
    serveStatic(publicDir, url.pathname, res);
  });
}

function readRaw(req) {
  return new Promise((resolve, reject) => {
    let data = '';
    req.on('data', (chunk) => { data += chunk; });
    req.on('end', () => resolve(data));
    req.on('error', reject);
  });
}

async function readBody(req) {
  const raw = await readRaw(req);
  if (!raw) return {};
  return JSON.parse(raw);
}

function sendJson(res, payload, status = 200) {
  res.writeHead(status, { 'Content-Type': 'application/json; charset=utf-8' });
  res.end(JSON.stringify(payload));
}

function serveStatic(publicDir, pathname, res) {
  const safePath = pathname === '/' ? '/index.html' : pathname;
  const filePath = path.normalize(path.join(publicDir, safePath));
  if (!filePath.startsWith(publicDir)) {
    res.writeHead(403).end('Forbidden');
    return;
  }
  fs.readFile(filePath, (error, content) => {
    if (error) {
      res.writeHead(404).end('Not found');
      return;
    }
    const ext = path.extname(filePath);
    const types = { '.html': 'text/html', '.css': 'text/css', '.js': 'application/javascript', '.svg': 'image/svg+xml', '.png': 'image/png' };
    res.writeHead(200, { 'Content-Type': `${types[ext] || 'application/octet-stream'}; charset=utf-8` });
    res.end(content);
  });
}

const bot = setupBot();
const server = createServer(bot);
server.listen(PORT, async () => {
  console.log(`Кто шпион app is running on ${PUBLIC_URL} (port ${PORT})`);
  if (bot) {
    if (process.env.WEBHOOK_URL) {
      await bot.telegram.setWebhook(`${normalizePublicUrl(process.env.WEBHOOK_URL)}/telegram`);
      console.log('Telegram webhook is configured.');
    } else {
      bot.launch();
      console.log('Telegram bot polling started.');
    }
  } else {
    console.log('BOT_TOKEN is not set, web preview only.');
  }
});

process.once('SIGINT', () => {
  if (bot) bot.stop('SIGINT');
  server.close();
});
process.once('SIGTERM', () => {
  if (bot) bot.stop('SIGTERM');
  server.close();
});
