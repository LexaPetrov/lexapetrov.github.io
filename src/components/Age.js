import React, { useState } from 'react'
import { getAge } from '../utils/functions'

export default props => {
    const [age, setAge] = useState('')

    setInterval(() => {
        setAge(getAge())
    }, 1);
    return (
        <div className='age about__card__description__skills age'>
            Age:&nbsp;<label>{age}</label>
          </div>
    )
}