const popGrowth =(p0, percGrowth, aug, pf) => {
    let p = p0;
    let population = [];
    while (p < pf) {
        p += (p * (percGrowth/100)) + aug;
        population.push(p);
    } return population.length;
};
console.log(popGrowth(1500, 5, 100, 5000));
console.log(popGrowth(1500000, 2.5, 10000, 2000000));

function nbYear(p0, percent, aug, p){
    let i = 0;
    for (i; p0 < p; i++) {
      p0 += p0 * (percent / 100) + aug;
    }
    return i;
 }

 console.log(nbYear(1500, 5, 100, 5000))
