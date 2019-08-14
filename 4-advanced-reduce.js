import fs from 'fs'

// Had to use double spaces rather than tabs because 
// VS code kept recoding my tabs as double spaces :P
var output = fs.readFileSync('4-advanced-reduce.txt', 'utf8')
    .trim()
    .split('\n')
    .map(line => line.split('  '))
    .reduce( (result, item ) => {
        let name = item[0]
        result[name] = result[name] || [] // If already defined
        result[name].push({
            name: item[1],
            price: item[2],
            quantity: item[3]
        })
        return result
    }, {})



console.log(JSON.stringify(output, null, 2))