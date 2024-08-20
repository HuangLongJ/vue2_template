@echo off

chcp 65001 > nul

REM 获取当前脚本所在的目录
set "scriptPath=%~dp0"

REM 设置项目路径
set "projectPath=%scriptPath%"

REM 打开 PowerShell 终端并执行命令
start powershell.exe -NoExit -Command "cd '%projectPath%'; yarn start"