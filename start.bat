@echo off
setlocal EnableExtensions
cd /d "%~dp0"

echo ========================================
echo  Кто шпион - Telegram bot launcher
echo ========================================

where node >nul 2>nul
if errorlevel 1 (
  echo Node.js не найден.
  echo Установи Node.js LTS: https://nodejs.org/
  echo Потом снова запусти start.bat
  pause
  exit /b 1
)

if not exist package.json (
  echo package.json не найден. Запускай start.bat из папки проекта.
  pause
  exit /b 1
)

if not exist node_modules (
  echo Устанавливаю зависимости в эту папку...
  call npm install
  if errorlevel 1 (
    echo Не удалось установить зависимости.
    pause
    exit /b 1
  )
)

if not exist .env (
  echo.
  set /p BOT_TOKEN_INPUT=Вставь BOT_TOKEN от @BotFather: 
  if "%BOT_TOKEN_INPUT%"=="" (
    echo BOT_TOKEN обязателен для Telegram-бота.
    pause
    exit /b 1
  )
  > .env echo BOT_TOKEN=%BOT_TOKEN_INPUT%
  >> .env echo PUBLIC_URL=http://localhost:3000
  >> .env echo PORT=3000
  echo Файл .env создан рядом со start.bat
)

for /f "usebackq tokens=1,* delims==" %%A in (".env") do (
  if not "%%A"=="" if not "%%A:~0,1"=="#" set "%%A=%%B"
)

if "%PUBLIC_URL%"=="" set "PUBLIC_URL=http://localhost:3000"
if "%PORT%"=="" set "PORT=3000"

echo.
echo Запускаю сервер: %PUBLIC_URL%
echo Для остановки нажми Ctrl+C.
echo.
call npm start
pause
