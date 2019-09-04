const fs = require('fs')
const path = require('path')
const async = require('async')

async.series(
  [
    callback => {
      fs.readFile(
        path.resolve(__dirname, '../file/test1.txt'),
        'utf8',
        callback
      )
    },
    callback => {
      fs.readFile(
        path.resolve(__dirname, '../file/test2.txt'),
        'utf8',
        callback
      )
    }
  ],
  (err, values) => {
    if (err) {
      throw new Error(err)
    }
    console.log('test1: ', values[0])
    console.log('test2: ', values[1])
  }
)
