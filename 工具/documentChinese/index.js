import fs from 'fs';
import XlsxPopulate from 'xlsx-populate';
import traverseDir from './utils/traverseDir.js';

// 定义要读取的 txt 文件路径
const txtFilePath = './projectNames.txt';

// 定义保存结果的 Excel 文件夹路径
const excelFolderPath = './Excel';

// 读取 txt 文件中的项目名
function readProjectNames (txtFilePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(txtFilePath, 'utf8', (err, data) => {
      if (err) {
        reject(err);
        return;
      }
      const projectNames = data.split('\n').map((line) => line.trim());
      resolve(projectNames);
    });
  });
}

// 创建 Excel 文件夹
function createExcelFolder (excelFolderPath) {
  return new Promise((resolve, reject) => {
    fs.mkdir(excelFolderPath, { recursive: true }, (err) => {
      if (err) {
        reject(err);
        return;
      }
      resolve();
    });
  });
}

// 创建 Excel 文件
function createExcelFile (rows, excelPath) {
  return new Promise((resolve, reject) => {
    XlsxPopulate.fromBlankAsync()
      .then((workbook) => {
        const sheet = workbook.sheet(0);

        // 设置标题行
        sheet.cell('A1').value('文件路径');
        sheet.cell('B1').value('中文');
        sheet.cell('C1').value('英文');

        // 设置每列的宽度
        sheet.column('A').width(100);
        sheet.column('B').width(50);
        sheet.column('C').width(50);

        // 将数据填充到单元格中
        rows.forEach((row, index) => {
          sheet.cell(`A${index + 2}`).value(row[0]);
          sheet.cell(`B${index + 2}`).value(row[1]);
        });

        // 保存 Excel 文件
        return workbook.toFileAsync(excelPath);
      })
      .then(() => {
        resolve();
      })
      .catch((error) => {
        reject(error);
      });
  });
}

// 读取 txt 文件中的项目名
const projectNames = await readProjectNames(txtFilePath)
// 创建 Excel 文件夹
await createExcelFolder(excelFolderPath)
// 遍历每个项目名
const promises = projectNames.map(async (projectName) => {
  // 定义要读取的目录路径
  const dirPath = `../${projectName}/src`;
  // 定义保存结果的 Excel 文件路径
  const excelPath = `${excelFolderPath}/${projectName}.xlsx`;
  // 开始遍历目录并提取中文字符
  try {
    // 解析路径文件
    const rows = await traverseDir(dirPath);
    // 创建excel文件
    await createExcelFile(rows, excelPath);
    console.log(`文件生成成功: ${projectName}.xlsx `);
  } catch (error) {
    console.error(`${projectName}遍历目录出错:`, error);
  }
});
// 等待所有项目遍历完成
try {
  await Promise.all(promises)
  console.log('所有项目的 Excel 文件生成成功');
} catch (error) {
  console.error('遍历目录出错:', error);

}
