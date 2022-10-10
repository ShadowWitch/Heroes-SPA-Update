
import React, { useMemo } from 'react'
import { getHeroesByPublisher } from '../helpers'

import { HeroCard } from './HeroCard'

export const HeroList = ({publisher}) => {

    const heros = useMemo(() => getHeroesByPublisher(publisher), [publisher]) 

    const randomEffect = () => {
        const classArrAnimate = ['animate__backInDown', 'animate__bounce', 'animate__bounce']
        const num = Math.floor(Math.random() * classArrAnimate.length)
        return classArrAnimate[num]
    }

    return (
        <div className={`row rows-cols-1 row-cols-md-3 g-3 animate__animated ${randomEffect()}`}>
            {
                heros.map(hero => (
                    <HeroCard 
                        key={hero.id}
                        {...hero}
                    />
                ))
            }
        </div>
    )
}
