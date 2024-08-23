import path from 'path';
import fs from 'fs';

// 路径解析文件
// 递归遍历目录并提取中文字符
function traverseDir (dirPath) {
    return new Promise((resolve, reject) => {
        // 使用 fs 模块读取目录内容
        fs.readdir(dirPath, (err, files) => {
            if (err) {
                reject(err);
                return;
            }
            // 创建空的二维数组
            const rows = [];
            // 使用 Promise.all() 等待所有文件处理完成
            const promises = files.map((file) => {
                // 获取文件的完整路径
                const filePath = path.join(dirPath, file);
                // 判断文件是否为目录
                return new Promise((resolve, reject) => {
                    fs.stat(filePath, (err, stats) => {
                        if (err) {
                            reject(err);
                            return;
                        }
                        if (stats.isDirectory()) {
                            // 如果是目录，则递归调用函数遍历子目录
                            traverseDir(filePath)
                                .then((subRows) => {
                                    rows.push(...subRows);
                                    resolve();
                                })
                                .catch((error) => {
                                    reject(error);
                                });
                        } else {
                            // 如果是文件，并且是 Vue 或 JS 文件，则读取文件内容并提取中文字符
                            if (isVueOrJSFile(file)) {
                                readFile(filePath)
                                    .then((data) => {
                                        // 将文件内容按行分割成数组
                                        const lines = data.split('\n');
                                        // 遍历每一行，判断是否为注释行，并提取中文字符
                                        lines.forEach((line) => {
                                            // 判断当前行是否为注释行 如果是注释行，则跳过
                                            if (isCommentLine(line)) return;
                                            // 一行有汉字也有注释的情况
                                            const commentIndex = line.indexOf('//');
                                            if (commentIndex !== -1) {
                                                line = line.substring(0, commentIndex).trim(); // 截取注释之前的汉字并去除首尾空格
                                            }
                                            // 判断是否匹配中文字符
                                            // const chineseReg = /[\u4e00-\u9fa5]+/g;
                                            const chineseReg = /[\u4e00-\u9fa5]+(?:\d+[\u4e00-\u9fa5]+)*(?:[,，][\u4e00-\u9fa5]+(?:\d+[\u4e00-\u9fa5]+)*)*/g;
                                            const chineseArr = line.match(chineseReg);
                                            if (chineseArr) {
                                                // 将文件名和中文字符添加到二维数组
                                                chineseArr.forEach((chinese) => {
                                                    rows.push([filePath, chinese]);
                                                });
                                            }
                                        });
                                        resolve();
                                    })
                                    .catch((error) => {
                                        reject(error);
                                    });
                            } else {
                                resolve();
                            }
                        }
                    });
                });
            });
            // 等待所有文件处理完成后，返回结果
            Promise.all(promises)
                .then(() => {
                    resolve(rows);
                })
                .catch((error) => {
                    reject(error);
                });
        });
    });
}


// 判断当前行是否为注释行
function isCommentLine (line) {
    const commentReg = /^\s*\/\/\s*/; // // 开头
    const asteriskReg = /^\s*\*\s*/; // * 开头
    const blockCommentReg = /^\s*\/\*\s*/; // /* 开头
    const htmlCommentReg = /^\s*<!--\s*/; // <!-- 开头
    return commentReg.test(line) || asteriskReg.test(line) || blockCommentReg.test(line) || htmlCommentReg.test(line);
}

// 判断文件是否为 Vue 或 JS 文件
function isVueOrJSFile (file) {
    const ext = path.extname(file);
    return ext === '.vue' || ext === '.js';
}

// 读取文件内容
function readFile (filePath) {
    return new Promise((resolve, reject) => {
        fs.readFile(filePath, 'utf8', (err, data) => {
            if (err) {
                reject(err);
                return;
            }
            resolve(data);
        });
    });
}

export default traverseDir