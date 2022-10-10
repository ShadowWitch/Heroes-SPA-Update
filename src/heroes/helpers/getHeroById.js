import { heroes } from "../data"

export const getHeroById = (id) => {
    // console.log('ME DISPARE!!')
    return heroes.find(hero => hero.id === id)
}
