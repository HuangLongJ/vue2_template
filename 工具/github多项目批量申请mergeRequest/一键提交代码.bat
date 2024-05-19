@echo off

REM 获取当前脚本所在的目录
set "scriptPath=%~dp0"

REM 设置项目路径
set "projectPath=%scriptPath%"

REM 切换到项目路径
cd /d "%projectPath%"

REM 添加所有修改到暂存区
git add .

REM 提交暂存区的修改
git commit -m "Auto commit changes"

REM 推送到远程仓库
git push origin master

echo "代码已成功暂存、提交并推送到远程仓库"