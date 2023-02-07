const getBeers = require('./data')

function main(property) {
    console.log('property:', property)
    const beers = getBeers();

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