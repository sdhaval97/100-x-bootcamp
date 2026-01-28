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

// Question 7: filter object by values > 50

function filterObjects(data) {
    let output = {};
    for (let key in data) {
        let value = data[key]
        if (value > 50) {
            output[key] = value;
        }
    }
    return output;
}

// Question 8: finding student with highest average

function highestAverage(data) {
    let topper = "";
    largestAverage = 0;
    for (let key in data) {
        let value = data[key];
        let sum = 0;
        let average;
        for (let i=0; i < value.length; i++) {
            sum = sum + value[i];
        }
        average = sum / value.length;
        
        if (average > largestAverage) {
            largestAverage = average;
            topper = key;
        }
        
    }
    return topper;
}

// Question 9. unique values

function uniqueValues(data) {
    output = [];
    for (let key in data) {
        let value = data[key];
        for (let i=0; i < value.length; i++) {
            if (!output.includes(value[i])) {
                output.push(value[i]);
            }
        }
    }
    return output;
}

// Question 10. pick only given keys

function onlyGivenKeys(data, keyArr) {
    let output = {};
    for (let key in data) {
        let value = data[key];
        for (let i = 0; i < keyArr.length; i++) {
            output[keyArr[i]] = data[keyArr[i]];
        }
    }
    return output;
}

// Question 12. sort object entries
function sortObjectEntries(data) {
    objectArr = [];
    for (let key in data) {
        let value = data[key];
        objectArr.push([key, value]);

    }
    for (let i = 0; i < objectArr.length; i++) {
        for (let j = 0; j < objectArr.length-1; j++) {
            if (objectArr[j][1] > objectArr[j+1][1]) {
                let tmp = objectArr[j];
                objectArr[j] = objectArr[j+1];
                objectArr[j+1] = tmp;
            }
        }
    }
    return objectArr;
}
console.log(sortObjectEntries({ a: 3, b: 1, c: 2 }));