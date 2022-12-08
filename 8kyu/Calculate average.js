Write a function which calculates the average of the numbers in a given list.

Note: Empty arrays should return 0.




function findAverage(array) {
    // your code here
    return 0;
  }


//My solution
function find_average(array) {
    if (array.length === 0) {
    return 0;
    }
    var result = 0;
    for (i=0; i<array.length; i++) {
      result +=array[i];
    }
    return result/array.length;
  }

//Best practice
var find_average = (array) => {  
    return array.length === 0 ? 0 : array.reduce((acc, ind)=> acc + ind, 0)/array.length
  }