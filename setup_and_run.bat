@echo off
title El Paraiso Tropical Restaurante - Setup & Run
color 0A

echo.
echo  =====================================
echo   El Paraiso Tropical Restaurante
echo   Setting up and starting server...
echo  =====================================
echo.

:: Try common Python locations
set PYTHON_EXE=

if exist "C:\Python312\python.exe"     set PYTHON_EXE=C:\Python312\python.exe
if exist "C:\Python311\python.exe"     set PYTHON_EXE=C:\Python311\python.exe
if exist "C:\Python310\python.exe"     set PYTHON_EXE=C:\Python310\python.exe
if exist "C:\Python39\python.exe"      set PYTHON_EXE=C:\Python39\python.exe
if exist "%LOCALAPPDATA%\Programs\Python\Python312\python.exe" set PYTHON_EXE=%LOCALAPPDATA%\Programs\Python\Python312\python.exe
if exist "%LOCALAPPDATA%\Programs\Python\Python311\python.exe" set PYTHON_EXE=%LOCALAPPDATA%\Programs\Python\Python311\python.exe
if exist "%LOCALAPPDATA%\Programs\Python\Python310\python.exe" set PYTHON_EXE=%LOCALAPPDATA%\Programs\Python\Python310\python.exe
if exist "%USERPROFILE%\miniconda3\python.exe" set PYTHON_EXE=%USERPROFILE%\miniconda3\python.exe
if exist "%USERPROFILE%\anaconda3\python.exe"  set PYTHON_EXE=%USERPROFILE%\anaconda3\python.exe

:: Try system PATH
if "%PYTHON_EXE%"=="" (
    where python >nul 2>&1
    if %ERRORLEVEL%==0 set PYTHON_EXE=python
)

if "%PYTHON_EXE%"=="" (
    where python3 >nul 2>&1
    if %ERRORLEVEL%==0 set PYTHON_EXE=python3
)

if "%PYTHON_EXE%"=="" (
    echo  [ERROR] Python not found on this system.
    echo.
    echo  Please install Python 3.9+ from:
    echo    https://www.python.org/downloads/
    echo.
    echo  During installation, check "Add Python to PATH"
    echo  Then re-run this script.
    echo.
    pause
    exit /b 1
)

echo  [OK] Found Python: %PYTHON_EXE%
echo.

:: Install dependencies
echo  Installing dependencies...
"%PYTHON_EXE%" -m pip install flask flask-cors --quiet
if %ERRORLEVEL% NEQ 0 (
    echo  [ERROR] Failed to install packages.
    echo  Try running: %PYTHON_EXE% -m pip install flask flask-cors
    pause
    exit /b 1
)
echo  [OK] Dependencies ready.
echo.

:: Start server
echo  Starting Flask server at http://localhost:5000
echo  Press Ctrl+C to stop the server.
echo.
echo  Opening browser...
timeout /t 2 /nobreak >nul
start http://localhost:5000

cd /d "%~dp0"
"%PYTHON_EXE%" app.py
pause
