function isValidWalk(walk) {
    let cost = {
        'n': 0,
        'e': 0,
        's': 0,
        'w': 0
    };
    walk.map(elem => {
        cost[elem]++;
    });

    return (cost['n'] === cost['s'] && cost['e'] === cost['w'] && walk.length === 10);
}