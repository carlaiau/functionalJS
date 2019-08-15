const fetch = require('node-fetch')
// No longer need
// const co = require('co')

/*
fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then( r => r.json())
    .then (post => post.title)
    .then (x =>  x))
*/

run(function* () {
    for(var i = 1; i < 6; i++){
        const uri = 'https://jsonplaceholder.typicode.com/posts/' + i
        const response = yield fetch(uri)
        const post = yield response.json()
        const title = post.title
        console.log(`${i} title is\t`, title)
    }
})


// Custom running function, which is made recursive
function run(generator) {
    const iterator = generator()
    function iterate(iteration){
        if(iteration.done)
            return iteration.value
        const promise = iteration.value
        return promise.then(x => iterate(iterator.next(x)))
    }
    return iterate(iterator.next())

}
