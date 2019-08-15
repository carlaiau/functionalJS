let categories = [
    {id: 'german shepherd', parent: 'dog'},
    {id: 'animals', parent: null},
    {id: 'mammals', parent: 'animals'},
    {id: 'cat', parent: 'mammals'},
    {id: 'dog', parent: 'mammals'},
    {id: 'pug', parent: 'dog'},
    {id: 'british blue', parent: 'cat'},
    {id: 'ginger', parent: 'cat'},
]


let makeTree = ({
    categories,
    parent = null}) => {
    let node = {}
    categories
        .filter(c => c.parent === parent)
        .forEach(c => node[c.id] = makeTree({
            categories, 
            parent: c.id
        }))
    return node
}

console.log(
    JSON.stringify(
        makeTree({categories}),
        null, 2)
)
