const fs = require('fs')
const results = []
const addResult = (index, result) => {
  results[index] = result
  if (results.length == 2)
  {
    console.log(results[0] + results[1])
  }
}

const a = fs.readFile('./data/a',{encoding:'utf8'},(err,resultA) => {
  if (err) {
    //TODO
  }
  else
  {
    addResult(0,resultA)
    //console.log('a:', resultA)
  }
})
const b = fs.readFile('./data/b',{encoding:'utf8'},(err,resultB) => {
  if (err) {
    // TODO
  }
  else {
    addResult(1,resultB)
    //console.log('b:', resultB)
  }
})
console.log(a+b)
