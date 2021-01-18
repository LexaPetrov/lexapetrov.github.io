import React from 'react'
import PortfolioItem from './PortfolioItem'
import { data } from '../utils/functions'
import Filter from './Filter'

export default props => {

    return (
        <>
        <Filter />
            <div className='portfolio__wrapper'>
            
                {
                    data.map((v, k) => {
                        return (
                            <PortfolioItem
                                name={v.name}
                                link={v.link}
                                img={v.img}
                                desc={v.desc}
                                tags={v.tags.split(' ')}
                                class={v.class || ''}
                                key={k}
                            />
                        )
                    })
                }
            </div>
        </>
    )
}