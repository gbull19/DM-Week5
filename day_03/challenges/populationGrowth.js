const popGrowth =(initialPop, percGrowth, aug, surpassPop) => {
    let p = initialPop;
    let population = [];
    while (p < surpassPop) {
        p += (p * (percGrowth/100)) + aug;
        population.push(p);
    } return population.length;
};

console.log(popGrowth(1500000, 2.5, 10000, 2000000));