// findMatching
function findMatching(drivers, string) {
  return drivers.filter(driver => driver.toLowerCase() === string.toLowerCase());
}

// console.log(findMatching(drivers, 'Bobby'));// ['Bobby', 'Bobby']
// console.log(findMatching(drivers, 'Sammy')); // ['Sammy']
// console.log(findMatching(drivers, 'Bobby')); // ['Bobby', 'bobby']
// console.log(findMatching(drivers, 'Susan')); // []

// fuzzyMatch
function fuzzyMatch(drivers, string) {
  return drivers.filter(driver => driver.toLowerCase().startsWith(string.toLowerCase()));
};

// console.log(fuzzyMatch(drivers, 'Sa')); // ['Sammy', 'Sarah', 'Sally']
// console.log(fuzzyMatch(drivers, 'y')); // []
// console.log(fuzzyMatch(drivers, 'mm'));  // []

// matchName
function matchName(drivers, string) {
  return drivers.filter(driver => driver.name.toLowerCase() === string.toLowerCase());
}

// console.log(matchName(driver, 'Bobby')); // [{name: 'Bobby',hometown: 'Pittsburgh'},{name: 'Bobby',hometown: 'Tampa Bay'}]

// test