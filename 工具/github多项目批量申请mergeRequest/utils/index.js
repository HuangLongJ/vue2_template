import XLSX from 'xlsx';
import { join } from 'path';
import { homedir } from 'os';


const readFile = (filePath) => {
    const workbook = XLSX.readFile(filePath);
    const sheetName = workbook.SheetNames[0]; // 表名称
    const worksheet = workbook.Sheets[sheetName];// 表数据

    // 读取Excel文件
    return XLSX.utils.sheet_to_json(worksheet, { header: true });
}

const writeFile = (newData) => {
    newData.forEach(item => {
        delete item.id
        delete item.title
        delete item.message
    });
    // 创建一个空的Workbook
    const wb = XLSX.utils.book_new();

    // 创建一个Worksheet
    const ws = XLSX.utils.json_to_sheet(newData);

    if (!ws['!cols']) ws['!cols'] = [];
    ws['!cols'] = [
        { wpx: 300 },
        { wpx: 200 },
        { wpx: 200 },
        { wpx: 100 },
        { wpx: 200 },
        { wpx: 200 },
        { wpx: 200 },
    ];

    // 将Worksheet添加到Workbook
    XLSX.utils.book_append_sheet(wb, ws, "Sheet1");

    // 桌面生成
    const desktopPath = join(homedir(), 'Desktop');
    const filePath = join(desktopPath, 'result.xlsx');

    // 将Workbook写入新的Excel文件
    XLSX.writeFile(wb, filePath);

    console.log('新的Excel文件已成功生成！');
}

export { readFile, writeFile }