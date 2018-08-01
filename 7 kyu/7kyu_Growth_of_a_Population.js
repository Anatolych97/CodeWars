function nbYear(p0, percent, aug, p) {
    let years = 0;
    for (let i = p0; i + 1 <= p; i += (i * (percent * 0.01) + aug)) years++;
    return years;
}