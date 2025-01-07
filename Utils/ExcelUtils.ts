import xlsx from 'xlsx'

export class ExcelUtils{

    static getDataFromExcel(filePath : string, sheetName : string){
        
        const workbook = xlsx.readFile(filePath)
        const sheet = workbook.Sheets[sheetName]
        const jsonData = xlsx.utils.sheet_to_json(sheet)

        return jsonData

    }

}