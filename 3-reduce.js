var orders = [
    { amount: 250},
    { amount: 400},
    { amount: 100},
    { amount: 325},
]

// Old School
var totalAmount = 0
for(var i =0; i < orders.length; i++){
    totalAmount += orders[i].amount
}

// Anonymous
var totalAmount = orders.reduce(function(sum, order){
    return sum += order.amount
}, 0)

// ES6
var getSum = (i, x) => i += x.amount
var totalAmount = orders.reduce(getSum, 0)

console.log(totalAmount)
