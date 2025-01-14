// PROMESAS

const getHeroeByid = (id) => {
    return heroes.find((hero) => hero.id === id);
};

const getHeroeByid = (id) => heroes.find((hero) => hero.id === id);
const getHeroesByowner = (owner) => heroes.filter((heroe) => heroe.owner === owner);
console.log(getHeroesByOwner('DC'));