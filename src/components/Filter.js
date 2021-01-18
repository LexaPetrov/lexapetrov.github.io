import React from 'react'

export default props => {

    return (
        <>
            <input id='all' defaultChecked className='checkbox-all' type='radio' name='checkbox'/>
            <label htmlFor='all'>ALL</label>
            <input id='js' className='checkbox-js' type='radio' name='checkbox'/>
            <label htmlFor='js'>javascript</label>
            <input id='python' className='checkbox-python' type='radio' name='checkbox'/>
            <label htmlFor='python'>python</label>
            <input id='html' className='checkbox-html' type='radio' name='checkbox'/>
            <label htmlFor='html'>html</label>
            <input id='react' className='checkbox-react' type='radio' name='checkbox'/>
            <label htmlFor='react'>react</label>
        </>
    )
}
