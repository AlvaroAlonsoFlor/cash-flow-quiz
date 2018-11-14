import React, {Component, Fragment} from 'react';
import { CHANGE_POSITION } from '../constants/action-types';
import OptionList from '../components/OptionList';

export default class Question extends Component {

    constructor(props) {
        super(props);
        this.state = {
            question: '',
            optionSelected: '',
        }

        this.handleClick = this.handleClick.bind(this);
        this.handleSelect = this.handleSelect.bind(this);
    }

    handleClick() {
        

        const position = window.store.getState().questionPosition

        // This means the game should be finished
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

    handleSelect(event) {
        console.log('getting value', event.target.value);
        this.setState({optionSelected: event.target.value})
        
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
                <OptionList options={this.state.question.options} handleSelect={this.handleSelect}/>
                <button onClick={this.handleClick}>Next</button>
            </Fragment>
        );
    }

    
}

