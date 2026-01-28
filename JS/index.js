// Assignment

// Question 1: sumValues in object

function sumValues(data) {
    let output = {};
    for (let key in data) {
        let numbersArray = data[key];
        let currentSum = 0;

        // iterating through the numberArrays to find the sum
        for (let i = 0; i < numbersArray.length; i++) {
            currentSum = currentSum + numbersArray[i];
        }
        output[key] = currentSum;
    }
    return output;
}


// Question 2: count word occurences

function wordOccurences(myArr) {
    output = {};
    for (let fruit of myArr) {
        if (output[fruit]) {
            output[fruit] += 1;
        } else {
            output[fruit] = 1;
        }
    }
    return output;
}


