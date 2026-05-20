const state = {
    mode: 'online',
    rounds: 2,
    timer: 0,
    packs: [],
    room: null,
    playerId: localStorage.getItem('spyPlayerId') || null,
    name: localStorage.getItem('spyPlayerName') || `Игрок ${Math.floor(Math.random() * 900 + 100)}`
};

localStorage.setItem('spyPlayerName', state.name);

const packsEl = document.getElementById('packs');
const settingsSummary = document.getElementById('settings-summary');
const roomCard = document.getElementById('room-card');
const roomCode = document.getElementById('room-code');
const roomPlayers = document.getElementById('room-players');
const roomStatus = document.getElementById('room-status');
const joinCode = document.getElementById('join-code');

function api(path, options = {}) {
    return fetch(path, {
        headers: { 'Content-Type': 'application/json' },
        ...options,
        body: options.body ? JSON.stringify(options.body) : undefined
    }).then(async (response) => {
        const data = await response.json();
        if (!response.ok) throw new Error(data.error || 'Ошибка запроса');
        return data;
    });
}

function setSegmentValue(container, value) {
    container.querySelectorAll('button').forEach((button) => {
        button.classList.toggle('active', button.dataset.value === String(value));
    });
}

function updateSummary() {
    settingsSummary.textContent = `${state.mode === 'online' ? 'онлайн' : 'офлайн'} · ${state.rounds} круга`;
}

function renderPacks() {
    packsEl.innerHTML = state.packs.map((pack) => `
        <article class="pack-card ${pack.free ? 'free' : ''}">
            <div class="pack-image" style="background-image:url('${pack.cover}')">
                <span class="tag">${pack.free ? 'FREE · База' : `${pack.count} карт`}</span>
                <div class="lock">${pack.free ? '🆓' : pack.emoji}</div>
                <button>${pack.free ? 'Играть' : 'Открыть'}</button>
            </div>
            <h3>${pack.emoji} ${pack.title}</h3>
            <p>${pack.count} карточек</p>
        </article>
    `).join('');
}

function renderRoom(room) {
    state.room = room;
    roomCard.classList.remove('hidden');
    roomCode.textContent = room.code;
    roomPlayers.innerHTML = `<h3>Игроки (${room.players.length}/8)</h3>` + room.players.map((player) => `
        <div class="player"><span>${player.owner ? '👑' : '🙂'} ${player.name}</span>${player.owner ? '<b>хост</b>' : ''}</div>
    `).join('');
    roomStatus.textContent = room.players.length >= 3 ? 'Можно начинать игру в Telegram-боте' : 'Минимум 3 игрока для старта';
}

async function loadPacks() {
    const { packs } = await api('/api/packs');
    state.packs = packs;
    renderPacks();
}

async function createRoom() {
    const { room, playerId, link } = await api('/api/rooms', { method: 'POST', body: { name: state.name } });
    state.playerId = playerId;
    localStorage.setItem('spyPlayerId', playerId);
    renderRoom(room);
    history.replaceState(null, '', new URL(link).search);
}

async function joinRoom(code) {
    const { room, playerId } = await api(`/api/rooms/${code}/join`, {
        method: 'POST',
        body: { playerId: state.playerId, name: state.name }
    });
    state.playerId = playerId;
    localStorage.setItem('spyPlayerId', playerId);
    renderRoom(room);
    history.replaceState(null, '', `?join=${room.code}${new URLSearchParams(location.search).get('bot') ? `&bot=${new URLSearchParams(location.search).get('bot')}` : ''}`);
}

function getRoomLink() {
    return `${location.origin}${location.pathname}?join=${state.room.code}`;
}

document.querySelectorAll('.segmented').forEach((container) => {
    container.addEventListener('click', (event) => {
        const button = event.target.closest('button');
        if (!button) return;
        const value = button.dataset.value;
        if (container.dataset.setting === 'rounds') state.rounds = Number(value);
        if (container.dataset.setting === 'timer') state.timer = Number(value);
        if (container.dataset.setting === 'mode') state.mode = value;
        setSegmentValue(container, value);
        updateSummary();
    });
});

document.getElementById('settings-toggle').addEventListener('click', () => {
    document.getElementById('settings-card').classList.toggle('is-open');
});

document.getElementById('rules-toggle').addEventListener('click', () => {
    const rules = document.getElementById('rules');
    rules.classList.toggle('hidden');
    document.getElementById('rules-toggle').textContent = rules.classList.contains('hidden') ? '📖 Показать правила' : '📖 Свернуть правила';
});

document.getElementById('create-room').addEventListener('click', createRoom);
document.getElementById('join-room').addEventListener('click', () => joinRoom(joinCode.value.trim().toUpperCase()).catch((error) => alert(error.message)));
document.getElementById('copy-link').addEventListener('click', () => navigator.clipboard.writeText(getRoomLink()).then(() => alert('Ссылка скопирована')));
document.getElementById('share-link').addEventListener('click', async () => {
    const url = getRoomLink();
    if (navigator.share) await navigator.share({ title: 'Кто шпион', text: `Заходи в комнату ${state.room.code}`, url });
    else await navigator.clipboard.writeText(url).then(() => alert('Ссылка скопирована'));
});

const params = new URLSearchParams(location.search);
const join = params.get('join');
if (join) {
    joinCode.value = join.toUpperCase();
    joinRoom(join.toUpperCase()).catch(() => {});
}

updateSummary();
loadPacks();
