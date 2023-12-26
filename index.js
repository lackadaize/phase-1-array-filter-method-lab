// drivers array
const drivers = [
  {
    name: "Bobby",
    hometown: "Pittsburgh",
  },
  {
    name: "Sammy",
    hometown: "New York",
  },
  {
    name: "Sally",
    hometown: "Cleveland",
  },
  {
    name: "Annette",
    hometown: "Los Angeles", 
  },
  {
    name: "Bobby",
    hometown: "Tampa Bay",
  },
];

// findMatching
// returns all drivers that match the passed in name
// returns matching drivers if case does not match but letters do
// returns an empty array if there is no match

function findMatching(drivers, string) {
  return drivers.filter(driver => driver.name.toLowerCase() === string.toLowerCase());
}

console.log(findMatching(drivers, 'Bobby'));// ['Bobby', 'Bobby']
console.log(findMatching(drivers, 'Sammy')); // ['Sammy']
console.log(findMatching(drivers, 'Bobby')); // ['Bobby', 'bobby']
console.log(findMatching(drivers, 'Susan')); // []

// fuzzyMatch
// returns a driver if beginning provided letters match
// does not return drivers if only middle or ending letters match
// does not return drivers if only middle or ending letters match
function fuzzyMatch(drivers, string) {
    return drivers.name;
 }

console.log(fuzzyMatch(drivers, 'Sa')); // ['Sammy', 'Sarah', 'Sally']
console.log(fuzzyMatch(drivers, 'y')); // []
console.log(fuzzyMatch(drivers, 'mm'));  // []

// matchName
// accesses the data structure to check if name matches
function matchName(drivers, string) {
  return drivers.name;
}

console.log(matchName(driver, 'Bobby')); 
// [{name: 'Bobby',hometown: 'Pittsburgh'},{name: 'Bobby',hometown: 'Tampa Bay'}]