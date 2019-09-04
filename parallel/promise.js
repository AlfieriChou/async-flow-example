const fs = require('fs')
const path = require('path')

const readFile1 = () => {
  return new Promise((resolve, reject) => {
    fs.readFile(path.resolve(__dirname, '../file/test1.txt'), 'utf8', (err, ret) => {
      if (err) reject(err)
      resolve(ret)
    })
  })
}

const readFile2 = () => {
  return new Promise((resolve, reject) => {
    fs.readFile(path.resolve(__dirname, '../file/test2.txt'), 'utf8', (err, ret) => {
      if (err) reject(err)
      resolve(ret)
    })
  })
}

const bootstrap = async () => {
  const [value1, value2] = await Promise.all([readFile1(), readFile2()])
  console.log('test1: ', value1)
  console.log('test2: ', value2)
}

bootstrap()
