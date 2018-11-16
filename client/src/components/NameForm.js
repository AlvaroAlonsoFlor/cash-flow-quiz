import React from 'react';
import { SET_NAME } from '../constants/action-types';

const NameForm = (props) => {

    function handleChange (event) {       
         window.store.dispatch({type: SET_NAME, payload: event.target.value.trim()})
    }
    
    return(
            <input type='text' onChange={handleChange}/>     
    )
}

export default NameForm;