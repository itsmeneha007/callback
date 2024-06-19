

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


function filterArray(arr, callback) {
  
  const filteredArray = [];
  
  
  for (let i = 0; i < arr.length; i++) {
    
    if (callback(arr[i])) {
      
      filteredArray.push(arr[i]);
    }
  }
  
  
  return filteredArray;
}


function isEven(element) {
  return element % 2 === 0;
}
const filteredNumbers = filterArray(numbers, isEven);

console.log(numbers);
console.log( filteredNumbers);