function getMiddle(s) {
    if (s.length === 1) return s;
    else if (s.length % 2 !== 0) return s[Math.round(s.length / 2 - 1)];
    else return s.substr(Math.round(s.length / 2 - 1), 2);
}