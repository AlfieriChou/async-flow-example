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

const queue = async.queue(
  async.asyncify(async data => {
    const value = await readFile(data.filePath)
    return value
  })
)

queue.push(
  { filePath: path.resolve(__dirname, '../file/test1.txt') },
  (err, result) => {
    if (err) throw err
    console.log('test1: ', result)
  }
)

queue.push(
  { filePath: path.resolve(__dirname, '../file/test2.txt') },
  (err, result) => {
    if (err) throw err
    console.log('test2: ', result)
  }
)

queue.drain(() => {
  console.log('all tasks have been processed')
})
