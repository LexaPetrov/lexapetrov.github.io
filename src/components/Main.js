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
        <div className='age'>
            Age: <label>{age}</label>
        </div>
    )
}