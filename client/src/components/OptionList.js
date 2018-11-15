import React from 'react';
import './OptionList.css'

const OptionList = ({options, handleSelect}) => {

    if (!options) {
        return null
    }

    const list = options.map((option, index) => {
        return(
        <div key={'option' + index}>
            <input type="radio" name='answer' key={'answer' + option.id} id={option.id} value={option.id} onChange={handleSelect}/>
            <label key={option.id}>{option.answer}</label>
            <hr className='radio-separator' />
        </div>
        )       
    })
  
    return(
        <div>{list}</div>     
    )
}

export default OptionList;