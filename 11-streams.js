const fs = require('fs')
const highland = require('highland')

highland(fs.createReadStream('11-customers.csv', 'utf8'))
    .split()
    .map((line => line.split(",")))
    .map(parts => ({
        name: parts[0],
        number: parts[1]
    }))
    .filter(customer => customer.number >= 10)
    .map(customer => customer.name)
    .each(x => console.log('each: ', x))

