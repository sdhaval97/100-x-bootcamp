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

// Question 3: Swap keys and values

function swapKeyValue(data) {
    output = {};
    for (let key in data) {
        let value = data[key];

        output[value] = key;
    }
    return output;
}

// Question 4: largest value key

function largestValueKey(data) {
    let largestNumber = 0;
    let largestKey = "";
    for (let key in data) {
        if (data[key] > largestNumber) {
            largestNumber = data[key];
            largestKey = key;
        }
    }
    return largestKey;
}

// Question 5: flatten object of arrays
function flattenArray(data) {
    output = [];
    for (let key in data) {
        output.push(...data[key]);
    }
    return output;
}

// Question 6: Group people by city

function groupPeople(data) {
    let output = {};
    for (let person of data) {
        let city = person.city;
        let name = person.name;

        if (!output[city]) {
            output[city] = [name];
        } else {
            output[city].push(name);
        }
    }
    return output
}
