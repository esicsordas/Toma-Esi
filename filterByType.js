const getBeers = require('./data')

function main(type) {
    const beers = getBeers();

    const filteredBeers = beers.filter(filteringType);

    function filteringType (beer) {
        if (beer.type.includes(type)){
            return 1;
        } else {
            return 0;
        }
    }
    console.log('type:', type)
    console.log('type:', filteredBeers)
}

main(process.argv[2])

// Usage: node filterByType.js <type>
// Example: node filterByType.js ALE