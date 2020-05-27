import React from 'react'

export default props => {


    return (
        <div className='portfolio__item'>
            <div className='portfolio__item__name'>
                <a href={props.link} alt=''>{props.name}</a>
            </div>
            <div className='portfolio__item__img'>
                <img src={props.img} alt='img'></img>
            </div>
            <div className='portfolio__item__desc'>
                {props.desc}
            </div>
            <div className='portfolio__item__tags'>
                {props.tags}
            </div>
        </div>
    )
}