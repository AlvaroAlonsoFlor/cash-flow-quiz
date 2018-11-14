import React, {Component, Fragment} from 'react';
import { CHANGE_POSITION } from '../constants/action-types';

const Questions = (props) => {

    function handleClick() {

        const position = window.store.getState().questionPosition

        if (position >= 10) {
             props.history.push(`/results`)
        } else {
            window.store.dispatch({ type: CHANGE_POSITION })
            const newPosition = window.store.getState().questionPosition  
            props.history.push(`/questions/${newPosition}`) 
        }
                                  
    
    }


    return(
        <Fragment>
            <p>And remember to put the score on top</p>
            <h1>Here goes the question</h1>
            <h2>Here goes the list of answers</h2>
            <button onClick={handleClick}>Next</button>
        </Fragment>
    )
}

export default Questions;