function invertory(heroes){
    let heroesObj = {};

    for (let hero of heroes){
        let [name, level, items] = hero.split(' / ');
        heroesObj[name] = [];
        heroesObj[name].push(level);
        heroesObj[name].push(items.split(', '));
    }

    let sortedheroesArray = Object.entries(heroesObj).sort((a, b) => a[1][0] - b[1][0]);


    let sortedHeroesObj = {};
    for (let [key, value] of sortedheroesArray) {
        sortedheroesArray[key] = value;
    }

    Object.entries(sortedHeroesObj).forEach(([name, [level, items]]) => {
        console.log(`Hero: ${name}`);
        console.log(`level => ${level}`);
        console.log(`Items => ${items}`);
    });
}



invertory([
    "Isaac / 25 / Apple, GravityGun"
]);