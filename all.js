//Print odd numbers in an array

function oddNum(arr){
    for(i=0;i<arr.length;i++){
       if (arr[i]%2!==0){
        console.log(arr[i])
    }
  }    
}
oddNum([1,2,4,5,6,8,]);

//Convert all the strings to title caps in a string array

function titleCaps(arr) {
    var newArr = [];
    for(var i=0; i< arr.length; i++) {
        newArr.push(arr[i][0].toUpperCase() + arr[i].slice(1));
    }
  return newArr.join(" ");
}

console.log(titleCaps(["i'm","a","Testcase"]));

//Sum of all numbers in an array

function sum(arr) {
    var sum=0;
 for(i=0;i<arr.length; i++){ 
    sum= sum+arr[i];
 }
 console.log(sum);
}
 sum ([1,2,3,4,5]);

//Return all the prime numbers in an array

function primeNumber(arr){
    for(let i=2; i<arr; i++){
        if(arr%i===0){
            return false;
        }
    }
    return arr>1;
}
var array = [-5, -3, -2, -1, ...Array(20).keys()]; 
console.log(array.filter(primeNumber));

//Return all the palindromes in an array

(function (arr){
    var narr = arr.filter((item)=>{
        var revarr, temp;
        arr =item.split("");
        
        for(let i=0; i<arr.length/2; i++){
            temp =arr[i];
            arr[i]=arr[arr.length-1-i];
            arr[arr.length-1-i]=temp;
        }
        revarr = arr.join("");
        if(revarr===item)
    return revarr;
        
    })
    console.log(narr);
})
(["array" , "madam" , "man" , "mom", "dad"]);

//Return median of two sorted arrays of same size

function medianOfTwoSortedArrays(arr1, arr2){
    let arr = [...arr1,...arr2]
    arr.sort(function(a,b){return a-b})
    let medianIndex = Math.floor(arr.length/2)
    return median= arr.length%2 === 1 ? arr[medianIndex] : (arr[medianIndex-1] + arr[medianIndex])/2

}
medianOfTwoSortedArrays([1,3,4,5],[2,6,8,7])

//Remove duplicates from an array

function removeDuplicate(arr){
    let arr1 = [...new Set(arr)]
    console.log(arr1); 
}
removeDuplicate([1,2,3,1,3,3,4,5,6,2])

//Rotate an array by k times

function rotate(array,k){
    for(let i=0; i<k; i++){
        array.unshift(array.pop())
    }
    console.log(array);
}
rotate([1,2,3,4,5], 3);