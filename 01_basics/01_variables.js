const accountId=144553
let accountEmail="Prakhar@gmail.com"
var accountPassword="12345"
accountCity="Lucknow"
let x
// Last 3 are variables
//We use let and not var because of issue in lock scope and functional scope.
// x will be undefined here
console.log(accountId);
console.table([accountEmail,accountPassword,accountCity,x])