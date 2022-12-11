import React from 'react'
import { HeroCard } from '../components/HeroCard'
import { getHerosByOrderName } from '../helpers/getHerosByOrderName'
import { DcPage } from './DcPage'
import { MarvelPage } from './MarvelPage'

export const CombinatedPages = () => {

    const heroes = getHerosByOrderName();

  return (
    <>  
        <h1 className='text-center mt-2 border-bottom border-dark'> All Heroes</h1>
        <div className='row rows-cols-1 row-cols-md-4 g-3 animate__animated animate__backInUp mt-2 mb-3'>
            {
                heroes.map(hero => (
                    <HeroCard key={hero.id} {...hero}></HeroCard>
                ))
            }
        </div>
    </>
  )
}
