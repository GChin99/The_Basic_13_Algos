// 1. Print all the integers from 1 through 255
function count(){
    for(var i=0; i<256; i++){
        console.log(i);
    }
}
// count ()

// 2. Print all odd integers from 1 to 255
function oddCount(){
    for(var i=1; i<256; i+=2){
        console.log(i)
    }
}
// oddCount()

// 3. Print ints and sum 0-255: Printe integers from 0 to 255 and with each integer print the sum so far 
function intsAndSum(){
    var sum = 0;
    for (var i=0; i<256; i++){
        sum += i;
        console.log(`the inter is ${i}, the sum is now ${sum}`);  //the ` ` is string cantonization.  It lets you add a sting and variable in one line

    }
}
// intsAndSum()

// 4. Iterate and print Array: Iterate through a given arry, printing each value. 
function newArr(arr){
    for(var i=0; i<arr.length; i++){
    // console.log(arr[i]);
    }
}
var result = newArr([5, 10, 15, 20, 25, 30, 35]);


// 5. Find and Print Max: Given an array, find and print its largest element
var myArray = [6, 30, 4, 77, 56, 100, 88, 200]  //we just made up the array 

function largestElement(arr){
    var largestValue=0;
    for(var i=0; i<arr.length; i++){
        // console.log(arr[i]);
            if(arr[i]>arr[i+1] && arr[i+1]>largestValue){  // if first index is greater than the second and it is greater than the stored largest value -then reassign largestValue  
            largestValue=arr[i];
        }
    }
    //console.log(largestValue);
}
//largestElement(myArray)  //the return value doesnt work if the largest vaule is the last index of the array. 

// 6. Get and print average. Analyze an arry's values and print the average
var average = arrAvg ([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

function arrAvg(arr){
    var sum = 0;
    

    for(var i=0; i<arr.length; i++){
        sum += arr[i];
        // console.log(sum);
    }
    var avg = sum/arr.length;
    // console.log(avg);
}

// 7. Array with odds: Create an array with all the odd integers between 1 and 255


function oddArr(){

    var odd = [];
    for(var i=1; i<256; i++){
        if (i % 2 == 1) {
            odd.push(i);
        }
    }
    return odd;
}
var x = oddArr();
console.log(x);