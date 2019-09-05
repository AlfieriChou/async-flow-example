const async = require('async')
const fs = require('fs')
const path = require('path')

const readFile = filePath => {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf8', (err, ret) => {
      if (err) reject(err)
      resolve(ret)
    })
  })
}

async.waterfall(
  [
    async () => {
      const value1 = await readFile(path.join(__dirname, '../file/test1.txt'))
      const value2 = await readFile(path.join(__dirname, '../file/test2.txt'))
      return [value1, value2]
    },
    ([value1, value2], callback) => {
      callback(null, [value1, value2])
    }
  ],
  (err, results) => {
    if (err) throw err
    console.log('test1: ', results[0])
    console.log('test2: ', results[1])
  }
)
