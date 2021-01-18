import React, { useState } from 'react';
import Age from './Age'

export default props => {
  const [clicked, setClicked] = useState(false)
  let tags = [
    'JavaScript ⭐️',
    'ReactJS ⭐️',
    'Redux ⭐️',
    'React Native ⭐️',
    'HTML',
    'CSS',
    'Python',
    'Web-Scraping',
    'C#',
    'Node.js',
    'iMovie / FinalCut',
    'MACOS / Windows / Ubuntu',
    'PhotoShop / Figma / Sketch / Adobe XD',
    'Electron',
    'MYSQL',
    'Firebase',
    'GIT',
    'Music ❤️',
    'YouTube ❤️'
  ]

  const toggleDonations = () => {
    setClicked(!clicked)
  }


  return (
    <>
      <div className='about__card'>
        <div className='about__card__img'>
        </div>
        <div className='about__card__description'>
          <p className='about__card__description__name'>Hi! I'm Alexey!</p>
          <p className='about__card__description__profession'>frontend-developer</p>
          <hr />
          <div className='about__card__description__skills location'>
            Location: Russia, Orenburg
          </div>
          <Age />
          <div className='about__card__description__skills bio'>
            I love cats and dogs, make photos, programming, watch YouTube, play videogames and acoustic guitar :)
          </div>
          <div className='about__card__description__skills bio2'>
            Also I have my YouTube channel and I making videos for people there :)
          </div>
          <div className='about__card__description__skills'>
            <div className='about__card__description__skills__tags'>
              {
                tags.map((t, k) => {
                  return (
                    <label className='tag' key={k}>{t}</label>
                  )
                })
              }
            </div>
          </div>
        </div>
      </div>
      <div className='about__socials'>
        <a className='about__socials__link' target='_blank' rel="noopener noreferrer" href='https://t.me/killing4fun' alt=''>
          <img src='img/socials__telegram.png' alt=''></img>
        </a>
        <a className='about__socials__link' target='_blank' rel="noopener noreferrer" href='https://www.instagram.com/ne.creator/' alt=''>
          <img src='img/socials__instagram.png' alt=''></img>
        </a>
        <a className='about__socials__link' target='_blank' rel="noopener noreferrer" href='https://github.com/LexaPetrov' alt=''>
          <img src='img/socials__github.png' alt=''></img>
        </a>
        <a className='about__socials__link' target='_blank' rel="noopener noreferrer" href='https://www.youtube.com/channel/UC4-phUrGgm63fZ9qZ1GOxBQ' alt=''>
          <img src='img/socials__youtube.png' alt=''></img>
        </a>
        <a className='about__socials__link' target='_blank' rel="noopener noreferrer" href='mailto:al1111997@yandex.ru' alt=''>
          <img src='img/socials__mail.png' alt=''></img>
        </a>
        <label className={`about__socials__link donations ${clicked}`}
          onClick={toggleDonations}
        >
          <img src='img/socials__donate.png' alt=''></img>
        </label>
        <div className={`donation`}>
          <a className='about__socials__link' target='_blank' rel="noopener noreferrer" href='https://www.tinkoff.ru/rm/petrov.aleksey68/IXJ5N7740' alt=''>
            <img src='img/socials__tinkoff.png' alt=''></img>
          </a>
          <a className='about__socials__link' target='_blank' rel="noopener noreferrer" href='https://money.yandex.ru/to/41001921826050' alt=''>
            <img src='img/socials__yandex.png' alt=''></img>
          </a>
          <a className='about__socials__link' target='_blank' rel="noopener noreferrer" href='https://www.donationalerts.com/r/ne_creator' alt=''>
            <img src='img/socials__alerts.png' alt=''></img>
          </a>
        </div>
      </div>
    </>

  )
}