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

// Question 4. Check for permissions

function checkPermissions(roles, checkRole, action) {
    let permissions = roles[checkRole];
    if (permissions && permissions.includes(action)) {
        return true;
    } else {
        return false;
    }
}

// Question 5. array of orders into revenue per category

function checkRevenue(sales) {
    let revenue = {};
    for (let sale of sales) {
        let id = sale.id;
        let category = sale.category;
        let price = sale.price;
        if (revenue[category]) {
            revenue[category] += price;
        } else {
            revenue[category] = price;
        }
    }
    return revenue;
}

// Question 6. remove duplicates by id

function removeDuplicates(users) {
    output = [];
    seenIDs = [];
    for (let user of users) {
        let id = user.id;
        let name = user.name;
        if (!seenIDs.includes(id)) {
            seenIDs.push(id);
            output.push(user);
        }
    }
    return output;
}

// Question 7. chunk objects into groups of size

function objectGroups(data, size) {
    let outputArr = [];
    let dataArr = [];
    for (let key in data) {
        let value = data[key];
        dataArr.push([key, value]);
    }
    for (let i = 0; i < dataArr.length; i += size) {
        let chunk = dataArr.slice(i, i + size);
        outputArr.push(chunk);
    }
    return outputArr;
}

