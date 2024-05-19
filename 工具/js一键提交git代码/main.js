const { exec } = require('child_process');

// 执行Git命令：git add .
exec('git add .', (error, stdout, stderr) => {
    if (error) {
        console.error(`执行Git命令时出错: ${error.message}`);
        return;
    }
    console.log(`Git命令输出: ${stdout}`);
});

// 执行Git命令：git commit -m "Auto commit changes"
exec('git commit -m "Auto commit changes"', (error, stdout, stderr) => {
    if (error) {
        console.error(`执行Git命令时出错: ${error.message}`);
        return;
    }
    console.log(`Git命令输出: ${stdout}`);
});

// 执行Git命令：git push origin master
exec('git push origin master', (error, stdout, stderr) => {
    if (error) {
        console.error(`执行Git命令时出错: ${error.message}`);
        return;
    }
    console.log(`Git命令输出: ${stdout}`);
});