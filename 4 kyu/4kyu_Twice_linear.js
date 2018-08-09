function dblLinear(n) {
    let ans = [1],
        i = 0,
        j = 0,
        y, z;

    while (ans.length <= n) {
        y = 2 * ans[i] + 1;
        z = 3 * ans[j] + 1;
        if (y < z) {
            ans.push(y);
            i++;
        } else if (y > z) {
            ans.push(z);
            j++;
        } else {
            ans.push(y);
            i++;
            j++;
        }
    }
    return ans[ans.length - 1];
}

//BAD SOLUTION
function dblLinear(n) {
    const getY = num => 2 * num + 1;
    const getZ = num => 3 * num + 1;
    let ans = [1];

    for (let i = 0; ans.length < n; i++) {
        ans.push(getY(ans[i]));
        ans.push(getZ(ans[i]));
        ans.sort((a, b) => a - b);
        // console.log(ans, "i: " + ans[ans.length - 1], " j: " + ans[ans.length - 2]);
    }
    return ans[n];
}