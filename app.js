

// #1

// function raiseToPower(b, e) {
//   return Math.pow(b, e);
// }

// var base = 2;
// var exp = 3;
// var power = raiseToPower(base, exp);
// console.log(power);

// #2

// function getAnswer() {
//   var x = 6;
//   var y = 3;
//   return x + y;
// }

// var result = getAnswer();
// console.log(result);

// #3

// var myPay = 1000;
// var myBills = 899;
// var moneyLeftOver = myPay - myBills;
// console.log(`My leftover pay is: ${moneyLeftOver}`);

// #4

// var innerHtml = "<p>Click here to <a href=\"#Home\">return home</a></p>";
// console.log(innerHtml);

// // #5

// function count() {
//   var oneToFive = "12345";
//   var len = oneToFive.length;
//   for (var i = 0; i < len; i++) {  
//     console.log(oneToFive[i]);
//   }
// }

// count();

// #6

// var myArray = [1, 2, 3];
// var arraySum = 0;
// for(var i = 0; i < myArray.length; i++){
//     var arraySum = arraySum + myArray[i];
// }
// console.log(`Total of array values are: ${arraySum}`);

// #7

// var x = 7;
// var y = 9;
// var result = "to come";

// if(x === y) {
//   result = "Equal!";
// } else {
//   result = "Not equal!";
// }

// console.log(result);

// #8 

// function myFunction() {
//   for (var i = 1; i <= 4; i += 2) {
//     console.log("Energizer Bunny.  Still going!");
//   }
// }
// myFunction();

// #9

// function zeroArray(m, n) {
//   var newArray = [];
//   var row = [];
//   for (var i = 0; i < m; i++) {
//     for (var j = 0; j < n; j++) {
//       row.push(0);
//     }
//     newArray.push(row);
//   }
//   return newArray;
// }

// var matrix = zeroArray(3, 2);
// console.log(matrix);

// #10

function createAnArray(){
    var newArray = [];
    for(i = 0; i <=10; i++){
        newArray.push(i);
    }
    return newArray;
}

function addArray(array) {
    var sum = 0;
    for(var i = 1; i < array.length; i++){ 
        sum += array[i];
    }
    return sum;
}

var newArr = createAnArray();
var add = addArray(newArr);

console.log(add);