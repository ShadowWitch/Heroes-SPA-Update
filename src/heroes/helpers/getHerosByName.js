import { heroes } from "../data";

export const getHerosByName = (name = '') =>{
    if (name.trim().length === 0) return [];

    name = name.toLowerCase()

    return heroes.filter(hero => 
        hero.superhero.toLocaleLowerCase().includes( name )
    );
}