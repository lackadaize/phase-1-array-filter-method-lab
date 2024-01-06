// // drivers array
// const drivers = [
//   {
//     name: "Bobby",
//     hometown: "Pittsburgh",
//   },
//   {
//     name: "Sammy",
//     hometown: "New York",
//   },
//   {
//     name: "Sally",
//     hometown: "Cleveland",
//   },
//   {
//     name: "Annette",
//     hometown: "Los Angeles", 
//   },
//   {
//     name: "Bobby",
//     hometown: "Tampa Bay",
//   },
// ];

// findMatching
function findMatching(drivers, string) {
  return drivers.filter(driver => driver.toLowerCase() === string.toLowerCase());
}

// console.log(findMatching(drivers, 'Bobby'));// ['Bobby', 'Bobby']
// console.log(findMatching(drivers, 'Sammy')); // ['Sammy']
// console.log(findMatching(drivers, 'Bobby')); // ['Bobby', 'bobby']
// console.log(findMatching(drivers, 'Susan')); // []

// fuzzyMatch
// returns a driver if beginning provided letters match
// does not return drivers if only middle or ending letters match
// does not return drivers if only middle or ending letters match
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