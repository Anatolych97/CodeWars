function pizzaRewards(customers, minOrders, minPrice) {
    let goodCustomers = [];

    for (let user in customers) {
        if (customers[user].filter(e => e >= minPrice).length >= minOrders) {
            goodCustomers.push(user);
        }
    }
    return goodCustomers;
}