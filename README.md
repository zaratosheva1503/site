# Кто шпион — Telegram bot

Полная версия игры «Кто шпион» для Telegram: лобби по коду/ссылке, выбор паков, роли, раунды ассоциаций, голосование и попытка шпиона угадать карту.

## Что внутри

- 25 паков и 677 карточек.
- Полные игровые паки:
  - Brawl Stars — 105 бравлеров с изображениями Brawlify CDN.
  - Clash Royale — 120 карт с изображениями RoyaleAPI CDN.
  - Dota 2 — 127 героев с изображениями Steam CDN.
- Для остальных паков добавлено по 15 карточек и локальные SVG-изображения.
- Web lobby открывается по ссылке `?join=CODE` и работает как Telegram WebApp/обычная страница.

## Запуск на Windows

1. Установи Node.js LTS: https://nodejs.org/
2. Открой `start.bat` двойным кликом.
3. Введи токен Telegram-бота при первом запуске. Токен сохранится в `.env` рядом со `start.bat`.
4. Если есть ngrok authtoken, вставь его при первом запуске; иначе просто нажми Enter и попробуй бесплатный tunnel.

`start.bat` сам установит зависимости в папку проекта, скачает `ngrok.exe` в `tools/`, запустит публичный tunnel, подставит `PUBLIC_URL` и запустит сервер.

## Запуск вручную

```bash
npm install
BOT_TOKEN=123:abc PUBLIC_URL=https://your-domain.example npm start
```

Для локальной проверки без Telegram токена:

```bash
npm install
npm start
```

Открой http://localhost:3000.

## Переменные окружения

- `BOT_TOKEN` или `TELEGRAM_BOT_TOKEN` — токен Telegram-бота.
- `PUBLIC_URL` — публичный URL сервера, нужен для ссылок лобби и Telegram WebApp.
- `USE_NGROK=1` — включает автостарт ngrok в `start.bat`.
- `NGROK_AUTHTOKEN` — необязательный токен ngrok для стабильного tunnel.
- `WEBHOOK_URL` — если задан, бот использует webhook `/telegram`; без него запускается polling.
- `PORT` — порт сервера, по умолчанию `3000`.
