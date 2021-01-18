import React from 'react'


export default props => {

    return (
        <div className='blog__item'>
            <a className='blog__item__link' href={'https://youtube.com/watch?v=' + props.videoId} alt='' target='_blank' rel='noopener noreferrer'>{props.title}</a>
            <div className="blog__item__imgwrapper">
                <a href={'https://youtube.com/watch?v=' + props.videoId} rel="noopener noreferrer" target='_blank' alt=''>
                    <img alt='' className='blog__item__img' src={props.img}></img>
                </a>
            </div>
            <div>
                <label className='blog__item__publishTime'>{new Date(props.publishTime).toLocaleString()}</label>
            </div>
        </div>
    )
}