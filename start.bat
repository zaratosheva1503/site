@echo off
setlocal EnableExtensions
cd /d "%~dp0"

echo ========================================
echo  Кто шпион - Telegram bot launcher
echo ========================================
echo.

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
  echo Первый запуск: создам .env рядом со start.bat.
  set /p BOT_TOKEN_INPUT=Вставь BOT_TOKEN от @BotFather: 
  if "%BOT_TOKEN_INPUT%"=="" (
    echo BOT_TOKEN обязателен для Telegram-бота.
    pause
    exit /b 1
  )
  > .env echo BOT_TOKEN=%BOT_TOKEN_INPUT%
  >> .env echo PORT=3000
  >> .env echo USE_NGROK=1
  echo.
  set /p NGROK_TOKEN_INPUT=Если есть ngrok authtoken, вставь его или нажми Enter: 
  if not "%NGROK_TOKEN_INPUT%"=="" >> .env echo NGROK_AUTHTOKEN=%NGROK_TOKEN_INPUT%
  echo Файл .env создан.
)

for /f "usebackq tokens=1,* delims==" %%A in (".env") do (
  if not "%%A"=="" if not "%%A:~0,1"=="#" set "%%A=%%B"
)

if "%PORT%"=="" set "PORT=3000"
if "%USE_NGROK%"=="" set "USE_NGROK=1"

if /I "%USE_NGROK%"=="1" (
  if not exist "tools\ngrok.exe" (
    echo Скачиваю ngrok в папку tools...
    if not exist tools mkdir tools
    powershell -NoProfile -ExecutionPolicy Bypass -Command "try { [Net.ServicePointManager]::SecurityProtocol=[Net.SecurityProtocolType]::Tls12; Invoke-WebRequest -Uri 'https://bin.equinox.io/c/bNyj1mQVY4c/ngrok-v3-stable-windows-amd64.zip' -OutFile 'tools\ngrok.zip'; Expand-Archive -Path 'tools\ngrok.zip' -DestinationPath 'tools' -Force; Remove-Item 'tools\ngrok.zip' -Force } catch { exit 1 }"
    if errorlevel 1 (
      echo Не удалось скачать ngrok. Проверь интернет или скачай ngrok.exe вручную в папку tools.
      pause
      exit /b 1
    )
  )

  if not "%NGROK_AUTHTOKEN%"=="" (
    tools\ngrok.exe config add-authtoken "%NGROK_AUTHTOKEN%" >nul 2>nul
  )

  echo Запускаю ngrok tunnel для порта %PORT%...
  taskkill /IM ngrok.exe /F >nul 2>nul
  start "ngrok tunnel" /min tools\ngrok.exe http %PORT%
  timeout /t 4 /nobreak >nul

  for /f "usebackq delims=" %%U in (`powershell -NoProfile -ExecutionPolicy Bypass -Command "for($i=0;$i -lt 20;$i++){ try { $t=(Invoke-RestMethod 'http://127.0.0.1:4040/api/tunnels').tunnels | Where-Object { $_.proto -eq 'https' } | Select-Object -First 1; if($t.public_url){ $t.public_url; exit 0 } } catch {}; Start-Sleep -Seconds 1 }; exit 1"`) do set "PUBLIC_URL=%%U"

  if "%PUBLIC_URL%"=="" (
    echo ngrok не отдал публичную ссылку.
    echo Если ngrok требует аккаунт, добавь NGROK_AUTHTOKEN в .env и запусти снова.
    pause
    exit /b 1
  )
) else (
  if "%PUBLIC_URL%"=="" set "PUBLIC_URL=http://localhost:%PORT%"
)

echo.
echo PUBLIC_URL=%PUBLIC_URL%
echo Сервер: http://localhost:%PORT%
echo Для остановки нажми Ctrl+C. Окно ngrok можно закрыть отдельно.
echo.
call npm start
pause
