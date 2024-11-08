import { spawn, exec } from 'child_process';
import { readFile, writeFile } from './utils/index.js';


const xlsxData = readFile('./项目目录.xlsx')
// 在 D:\项目 路径目录下 执行git命令
// xlsxData.forEach(item => {
//     exec(`cd ${item.path} && git checkout dev`, (error, stdout, stderr) => {
//         if (error) {
//             console.error(`执行Git命令时出错: ${error.message}`);
//             return ;
//         }
//         console.log(`${item.subjectName}命令输出: ${stdout}`);
//     })
// })


xlsxData.forEach(item => {
    // 设置要在PowerShell中执行的命令
    const command = 'git checkout dev';

    // 设置PowerShell进程的参数
    const powershellArgs = [ // powershell
        'powershell',
        '-NoProfile',
        '-ExecutionPolicy',
        'Bypass',
        '-WindowStyle',
        'Normal',
        '-Command',
        command
    ];

    // 启动PowerShell进程，‌并设置工作目录
    const powershell = spawn('powershell', powershellArgs, {
        cwd: item.path, // 设置子进程的工作目录
        stdio: 'inherit' // 让子进程的输出直接显示在父进程的终端上
    });

    // 监听进程结束事件
    powershell.on('close', (code) => {
        if (code !== 0) {
            console.error(`${item.subjectName}执行powershell命令时出错，‌退出码：‌${code}`);
        } else {
            console.log(`${item.subjectName}命令执行完毕`);
        }
    });

    // 监听错误事件
    powershell.on('error', (error) => {
        console.error(`${item.subjectName}执行powershell命令时出错: ${error.message}`);
    });
});