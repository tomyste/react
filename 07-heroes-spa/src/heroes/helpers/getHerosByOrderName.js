import { heroes } from "../data/heroes"


//Devuelve arreglo ordenado alfabeticamente

export const getHerosByOrderName = () => {

    const orderArray = heroes.sort( (a, b) => {
        if( a.superhero > b.name ) return 1; 
        if ( a.superhero < b.superhero ) return -1;
        return 0;
    });

    return orderArray;
}