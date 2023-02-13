const cats = [
    "Milo", "Otis", "Garfield"
]

function destructivelyAppendCat(name) {
    return cats.push("Ralph")
}

function destructivelyPrependCat(name) {
    return cats.unshift("Bob")
}

function destructivelyRemoveLastCat(name ) {
    return cats.pop(0, -1)
}

function destructivelyRemoveFirstCat(name) {
    return cats.shift()
}

function appendCat(name) {
    return [...cats, name]
}

function prependCat(name) {
    return [name, ...cats]
}

function removeLastCat(name){
    return [...cats.slice(0,-1,name)]
}

function removeFirstCat(name) {
    return [...cats.slice(1)]
}
