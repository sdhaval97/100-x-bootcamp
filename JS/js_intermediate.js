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
