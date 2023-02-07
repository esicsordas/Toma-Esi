const getBeers = require('./data')

function main() {
    const Beers = getBeers();
    Beers.forEach(function (beer) {
        console.log(beer.name)
    })
}

main()

// Usage: node showAll.js