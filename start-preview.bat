@echo off
title Digital Ghuru Workshop Preview
cd /d "%~dp0"
echo.
echo Starting the Digital Ghuru workshop preview at http://localhost:3001
echo Keep this window open while viewing the website.
echo.
call npx next dev -p 3001
pause
