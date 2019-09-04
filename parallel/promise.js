const fs = require('fs')
const path = require('path')

const readFile = (filePath) => {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf8', (err, ret) => {
      if (err) reject(err)
      resolve(ret)
    })
  })
}

const bootstrap = async () => {
  const [value1, value2] = await Promise.all([readFile(path.resolve(__dirname, '../file/test1.txt')), readFile(path.resolve(__dirname, '../file/test2.txt'))])
  console.log('test1: ', value1)
  console.log('test2: ', value2)
}

bootstrap()
