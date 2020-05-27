import React from 'react'
import PortfolioItem from './PortfolioItem'

export default props => {

    return (
        <div className='portfolio__wrapper'>
            <PortfolioItem 
                name='1'
                link='2'
                img='3'
                desc='4'
                tags='5'
            />
            <PortfolioItem />
            <PortfolioItem />
            <PortfolioItem />
            <PortfolioItem />
            <PortfolioItem />
            <PortfolioItem />
            <PortfolioItem />
            <PortfolioItem />
            <PortfolioItem />
            <PortfolioItem />
        </div>
    )
}