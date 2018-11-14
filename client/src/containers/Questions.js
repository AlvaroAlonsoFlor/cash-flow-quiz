import React, {Component, Fragment} from 'react';
import { CHANGE_POSITION, RESET_POINTS } from '../constants/action-types';

export default class Question extends Component {

    constructor(props) {
        super(props);
        this.state = {
            question: ''
        }

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {

        const position = window.store.getState().questionPosition

        if (position >= 10) {
             this.props.history.push(`/results`)
        } else {
            
            window.store.dispatch({ type: CHANGE_POSITION })
            const newPosition = window.store.getState().questionPosition;  
            this.props.history.push(`/questions/${newPosition}`)

            // Make a new request for the new question 
            const url = `/api/v1/questions/${newPosition}`
            this.request(url) 
        }                            
    
    }

    componentDidMount() {

        const store = window.store.getState()

        if (store.playerName === '' || store.questionPosition === 0) {
            window.location.replace('/quiz')
        }

        const position = window.store.getState().questionPosition;
        const url = `/api/v1/questions/${position}`
        this.request(url)
            
        
    }

    request (url) {
        fetch(url)
            .then(response => response.json())
            .then(info => this.setState({
                question: info
            }))
    }

    
    render() {

        return(
            <Fragment>
                <p>{window.store.getState().playerScore}</p>
                <h1>{this.state.question.description}</h1>
                <h2>Here goes the list of answers</h2>
                <button onClick={this.handleClick}>Next</button>
            </Fragment>
        );
    }

    
}

