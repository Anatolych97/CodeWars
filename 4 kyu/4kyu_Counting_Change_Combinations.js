const countChange = function (money, coins, i = 0) {
    if (money < 0) return 0;
    if (money === 0) return 1;

    if (i === coins.length && money > 0) {
        return 0;
    }

    return countChange(money - coins[i], coins, i) + countChange(money, coins, i + 1);
}

//Article for solution
//https://algorithms.tutorialhorizon.com/dynamic-programming-coin-change-problem/