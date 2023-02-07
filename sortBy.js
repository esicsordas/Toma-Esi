const getBeers = require('./data')

function main(property) {
    console.log('property:', property)
    const beers = getBeers();
    console.log(beers.sort((a, b) => a.abv > b.abv? 1 : -1))
    const sortedBeers = beers.sort (sorting)
    console.log(sortedBeers)
}

main(process.argv[2])

// Usage: node sortBy.js <score|abv>
// Example: node sortBy.js score

function sorting(a, b) {
    if (a.property > b.property) {
        return 1;
    } else {
        return -1;
    }
}