function DNAStrand(dna) {
    let target = dna.split(/\B/g);
    for (let i = 0; i < target.length; i++) {
        switch (target[i]) {
            case 'A':
                target[i] = 'T';
                continue;
            case 'T':
                target[i] = 'A';
                continue;
            case 'C':
                target[i] = 'G';
                continue;
            case 'G':
                target[i] = 'C';
                continue;
        }
    }
    return target.join("");
}