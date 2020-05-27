import React, { useState, useEffect } from 'react';
import { getAge } from '../functions'

export default props => {
  const [age, setAge] = useState('')
  useEffect(() => {
    setInterval(() => {
      setAge(getAge())
    }, 1);
  }, [age])


  return (
    <>
      <div className='about__card'>
        <div className='about__card__img'>
        </div>
        <div className='about__card__description'>
          <p className='about__card__description__name'>Hi! I'm Alexey!</p>
          <p className=''>frontend-developer</p>
          <hr/>
          <div className='about__card__description__skills location'>
            Location: Russia, Orenburg
          </div>
          <div className='age about__card__description__skills age'>
            Age:&nbsp;<label>{age}</label>
          </div>
          <div className='about__card__description__skills bio'>
          I love cats and dogs, make photos, programming, watch YouTube, play videogames and acoustic guitar :)
          </div>
          <div className='about__card__description__skills bio2'>
            Also I have my YouTube channel and I making videos for people there :)
          </div>
        </div>
      </div>
      <div className='about__socials'>
        <a className='about__socials__link' href='https://t.me/killing4fun' alt=''>
          <img src='img/socials__telegram.png' alt=''></img>
        </a>
        <a className='about__socials__link' href='https://www.instagram.com/ne.creator/' alt=''>
          <img src='img/socials__instagram.png' alt=''></img>
        </a>
        <a className='about__socials__link' href='https://github.com/LexaPetrov' alt=''>
          <img src='img/socials__github.png' alt=''></img>
        </a>
        <a className='about__socials__link' href='https://www.youtube.com/channel/UC4-phUrGgm63fZ9qZ1GOxBQ' alt=''>
          <img src='img/socials__youtube.png' alt=''></img>
        </a>
        <a className='about__socials__link' href='mailto:al1111997@yandex.ru' alt=''>
          <img src='img/socials__mail.png' alt=''></img>
        </a>
      </div>
    </>

  )
}