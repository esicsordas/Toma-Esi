const getBeers = require('./data')


function main(keyword) {
    console.log('keyword:', keyword)
    const beers = getBeers();
    console.log(beers.filter((beer) => beer.name.includes(keyword)? beer : 0))
    // Tip: string.prototype.includes()
}

main(process.argv[2])

// Usage: node searchByName.js <keyword>
// Example: node searchByName.js Rabbit