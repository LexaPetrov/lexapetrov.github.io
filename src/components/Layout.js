import React from 'react';
import '../index.css'

export default props => {
    let link = window.location.pathname

    console.log(link);
    

    return (
        <>
            <header>
                <div className='header__links container' >
                    <a className={`about__link ${link === '/' ? 'header__active' : null}`} href='/'>about me</a>
                    <a className={`portfolio__link ${link === '/portfolio' ? 'header__active' : null}` } href='/portfolio'>portfolio</a>
                    <a className={`blog__link ${link === '/blog' ? 'header__active' : null}`} href='/blog'>blog</a>
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