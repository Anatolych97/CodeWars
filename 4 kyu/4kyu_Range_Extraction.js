function solution(list) {
    let goal = "",
        tmp = "";
    for (let i = 0; i < list.length; i++) {
        if (divideTest(list[i], list[i + 1]) !== 1) {
            goal += list[i] + ",";
            tmp = "";
        } else {
            let j = i,
                counter = 0;
            for (; j < list.length; j++) {
                if (divideTest(list[j], list[j + 1]) === 1) {
                    tmp = list[j + 1];
                    counter++;
                } else {
                    goal += list[i];
                    i = j;
                    break;
                }
            }
            goal += counter > 1 ? "-" + tmp + "," : "," + tmp + ",";
        }
    }
    return goal.slice(0, -1);
}
const divideTest = (a, b) => a > b ? Math.abs(a - b) : Math.abs(b - a);