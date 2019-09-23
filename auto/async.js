const async = require('async')
const fs = require('fs')
const path = require('path')

async.auto(
  {
    fun1: function(callback) {
      fs.readFile(
        path.resolve(__dirname, '../file/test1.txt'),
        'utf8',
        callback
      )
    },

    fun2: function(callback) {
      fs.readFile(
        path.resolve(__dirname, '../file/test2.txt'),
        'utf8',
        callback
      )
    },

    fun3: [
      'fun1',
      'fun2',
      function(results, callback) {
        callback(null, {
          test1: results['fun1'],
          test2: results['fun2']
        })
      }
    ],

    fun4: [
      'fun1',
      function(results, callback) {
        callback(null, {
          test1: results['fun1']
        })
      }
    ]
  },
  function(err, results) {
    if (err) console.log(err)
    console.log(results)
  }
)
