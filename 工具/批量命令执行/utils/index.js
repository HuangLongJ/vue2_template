import XLSX from 'xlsx';
// import { join } from 'path';
// import { homedir } from 'os';
// import { writeFileSync } from 'fs';


const readFile = (filePath) => {
    const workbook = XLSX.readFile(filePath);
    const sheetName = workbook.SheetNames[0]; // 表名称
    const worksheet = workbook.Sheets[sheetName];// 表数据

    // 读取Excel文件
    return XLSX.utils.sheet_to_json(worksheet, { header: true });
}
const writeFile = (filePath, newData) => {
    const workbook = XLSX.readFile(filePath);
    const sheetName = workbook.SheetNames[0]; // 表名称
    const worksheet = workbook.Sheets[sheetName];// 表数据
    newData.forEach(item => {
        delete item.id;
        delete item.title;
        delete item.message;
    });

    // 将新数据转换为 Worksheet
    XLSX.utils.sheet_add_json(worksheet, newData, { skipHeader: true, origin: -1 });

    if (!worksheet['!cols']) worksheet['!cols'] = [];
    worksheet['!cols'] = [
        { wpx: 300 },
        { wpx: 150 },
        { wpx: 150 },
        { wpx: 200 },
        { wpx: 200 },
        { wpx: 200 },
        { wpx: 200 },
    ];

    // 将更新后的 Workbook 写入原始 Excel 文件
    XLSX.writeFile(workbook, filePath);

    console.log('数据已成功写入到原始 Excel 文件！');
}

// const writeFile = (newData) => {
//     newData.forEach(item => {
//         delete item.id
//         delete item.title
//         delete item.message
//     });
//     // 创建一个空的Workbook
//     const wb = XLSX.utils.book_new();

//     // 创建一个Worksheet
//     const ws = XLSX.utils.json_to_sheet(newData);

//     if (!ws['!cols']) ws['!cols'] = [];
//     ws['!cols'] = [
//         { wpx: 300 },
//         { wpx: 150 },
//         { wpx: 150 },
//         { wpx: 200 },
//         { wpx: 200 },
//         { wpx: 200 },
//         { wpx: 200 },
//     ];

//     // 将Worksheet添加到Workbook
//     XLSX.utils.book_append_sheet(wb, ws, "Sheet1");

//     // 桌面生成
//     const desktopPath = join(homedir(), 'Desktop');
//     const filePath = join(desktopPath, 'result.xlsx');

//     // 将Workbook写入新的Excel文件
//     XLSX.writeFile(wb, filePath);

//     console.log('新的Excel文件已成功生成！');
// }

// const writeFile1 = (newData) => {
//     newData.forEach(item => {
//         delete item.id;
//         delete item.title;
//         delete item.message;
//     });

//     // 将数据转换为文本格式
//     const textData = newData.map(item => JSON.stringify(item)).join('\n');

//     // 桌面生成
//     const desktopPath = join(homedir(), 'Desktop');
//     const filePath = join(desktopPath, 'result.txt');

//     // 将文本数据写入文件
//     writeFileSync(filePath, textData);

//     console.log('新的文本文件已成功生成！');
// };


export { readFile, writeFile }