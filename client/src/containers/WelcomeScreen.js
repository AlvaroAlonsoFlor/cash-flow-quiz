import React, {Component, Fragment} from 'react';
import NameForm from '../components/NameForm';
import { CHANGE_POSITION } from '../constants/action-types';


export default class WelcomeScreen extends Component {

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
       
        if (window.store.getState().playerName.trim() !== "") {
            window.store.dispatch({ type: CHANGE_POSITION })
            const position = window.store.getState().questionPosition  
            this.props.history.push(`/questions/${position}`)                       
        }     
        
    }

    render() {
        
        return(
            <Fragment>
                <h1>Welcome to the Cash Flow Quiz!</h1>
                <h3>What is your name?</h3>               
                <NameForm />
                <button onClick={this.handleClick}>Next</button>
                          
            </Fragment>
        )
    }
}
