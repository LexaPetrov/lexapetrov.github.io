import React from 'react'

export default props => {

    return (
        <div className={`portfolio__item ${props.class}`} >
            <div className='portfolio__item__name'>
                <a href={props.link} alt=''>{props.name}</a>
            </div>
            <hr></hr>
            <div className='portfolio__item__img'>
                <a href={props.link} alt=''>
                    <img src={props.img} alt='img'></img>
                </a>
            </div>
            <div className='portfolio__item__desc'>
                <div className='portfolio__item__desc__text'>
                    {props.desc}
                </div>
                <div className='portfolio__item__desc__link'>
                    <a href={props.link} target='_blank' rel="noopener noreferrer" alt=''>открыть</a>
                </div>
            </div>
            <div className='portfolio__item__tags'>
                {props.tags.map((t, k) => {
                    return (
                        <label className='tag' key={k}>{t}</label>
                    )
                })}
            </div>
        </div>
    )
}