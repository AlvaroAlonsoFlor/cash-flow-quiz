import React, {Component, Fragment} from 'react';
import NameForm from '../components/NameForm';

export default class WelcomeScreen extends Component {


    render() {
        return(
            <Fragment>
                <h2>Welcome to the Cash Flow Quiz!</h2>
                <h4>What is your name?</h4>
                <NameForm />
                <button>Next</button>
            </Fragment>
        )
    }
}
