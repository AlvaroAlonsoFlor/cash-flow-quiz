import React, {Component, Fragment} from 'react';
import NameForm from '../components/NameForm';
import { CHANGE_POSITION } from '../constants/action-types';

export default class WelcomeScreen extends Component {

    handleClick() {
       
        window.store.dispatch({type: CHANGE_POSITION})
        const position = window.store.getState().questionPosition  
        
        window.location.replace(`/questions/${position}`);
        
    }


    render() {
        return(
            <Fragment>
                <h2>Welcome to the Cash Flow Quiz!</h2>
                <h4>What is your name?</h4>
                
                <NameForm />
                <button onClick={this.handleClick}>Next</button>
                
                
            </Fragment>
        )
    }
}
