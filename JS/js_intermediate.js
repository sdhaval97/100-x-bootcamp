// Assignment

// Question 1: Sum of transactions

function sumTransactions(myArr) {
    let totals = {};
    for (let transactions of myArr) {
        let user = transactions.user;
        let amount = transactions.amount;
        if (totals[user]) {
            totals[user] += amount;
        } else {
            totals[user] = amount;
        }
    }
    return totals;
}

// Question 2: transform API response

function transformAPI(myArr) {
    response = {};
    for (let user of myArr) {
        let id = user.id;
        let name = user.name;
        if (!response[id]) {
            response[id] = name;
        }
    }
    return response;
}

// Question 3. Remove falsy values

function removeFalsy(data) {
    cleaned = {};
    for (let key in data) {
        let value = data[key];
        if (value) {
            cleaned[key] = value;
        }
    }
    return cleaned;
}
