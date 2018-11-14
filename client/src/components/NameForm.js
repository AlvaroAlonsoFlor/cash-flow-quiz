import React from 'react';
import { SET_NAME } from '../constants/action-types';

const NameForm = (props) => {

    function handleChange (event) {
        console.log(event.target.value);
        
         window.store.dispatch({type: SET_NAME, payload: event.target.value})
    }

   
    
    return(
            <input type='text' onChange={handleChange}/>
        
    )
}

export default NameForm;