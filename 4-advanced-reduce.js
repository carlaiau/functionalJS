import fs from 'fs'

// Had to use double spaces rather than tabs because 
// VS code kept recoding my tabs as double spaces :P
var output = fs.readFileSync('4-advanced-reduce.txt', 'utf8')
    .trim()
    .split('\n')
    .map(line => line.split('  '))
    .reduce( (customers, line ) => {
        customers[line[0]] = []
        customers[line[0]].push({
            name: line[1],
            price: line[2],
            quantity: line[3]
        })
        return customers
    }, {})



console.log(JSON.stringify(output, null, 2))