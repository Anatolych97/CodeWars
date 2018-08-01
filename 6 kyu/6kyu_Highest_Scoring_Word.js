function high(x) {
    let scores = [],
        words = x.split(' ');
    for (let i = 0; i < words.length; i++) {
        scores.push({
            "word": words[i],
            "value": wordScore(words[i])
        })
    }
    scores.sort((a, b) => b.value - a.value);
    console.log(scores);
    return scores[0].word;
}
high.alphabet = "abcdefghijklmnopqrstuvwxyz";

function wordScore(word) {
    let spl = word.split(''),
        score = 0;
    spl.forEach(e => score += high.alphabet.indexOf(e) + 1);
    return score;
}