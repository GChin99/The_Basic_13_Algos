// 1. Print all the integers from 1 through 255
function count(){
    for(var i=0; i<256; i++){
        console.log(i);
    }
}

// count ()

// 2. 

// 3. Print ints and sum 0-255: Printe integers from 0 to 255 and with each integer print the sum so far 
function intsAndSum(){
    var sum = 0;
    for (var i=0; i<256; i++){
        sum += i;
        console.log(`the inter is ${i}, the sum is now ${sum}`);  //the ` ` is string cantonization.  It lets you add a sting and variable in one line

    }
}

// intsAndSum()

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
    console.log(largestValue);
}

largestElement(myArray)  //the return value doesnt work if the largest vaule is the last index of the array. 