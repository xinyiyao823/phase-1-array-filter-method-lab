// Code your solution here
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby'];

function findMatching(drivers, name) {
    return drivers.filter((n) => {
        return n.toLowerCase() === name.toLowerCase()
    })
}


function fuzzyMatch(drivers, letters) {
    let driversLength = letters.length;
    return drivers.filter((n) => {
        return n.slice(0, driversLength) === letters;
    })
    
}

function matchName(drivers, string) {
     return drivers.filter((driver) => {
        return driver.name === string;
     })
}