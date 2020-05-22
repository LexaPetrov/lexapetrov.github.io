import React from 'react';
import '../index.css'

export default props => {

    return (
        <>
            <header>
                <div className='header__links container' >
                    <a className='about__link' href='/'>about me</a>
                    <a className='portfolio__link' href='/portfolio'>portfolio</a>
                    <a className='blog__link' href='/blog'>blog</a>
                </div>
            </header>
            <div className='container main__content'>
                {props.children}
            </div>
            <footer>
                    <label className='footer__label1'>made with</label><label>by me</label>
            </footer>
        </>
    )
}