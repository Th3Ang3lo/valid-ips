import fs from 'fs'

import ObjectsToCsv from 'objects-to-csv'

interface IObject2CsvData {
  [index: number]: string
}

export const object2Csv = async (data: IObject2CsvData[], filename: string): Promise<void> => {
  const dir = 'exported'

  fs.mkdirSync(dir, { recursive: true })

  const object2Csv = new ObjectsToCsv(data)
  await object2Csv.toDisk(`${dir}/${filename}`)
}
