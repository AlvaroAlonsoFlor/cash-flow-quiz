import React, {Component, Fragment} from 'react';

export default class Results extends Component {

    render() {

        function handleClick() {
            window.location.replace('/quiz');
        }

        const store = window.store.getState();

        return(
            <Fragment>
                <h1>Thank you {store.playerName}</h1>
                <h3>You scored {store.playerScore} points from a possible 150 in our cash flow quiz</h3>
                <button onClick={handleClick}>Try Again</button>
            </Fragment>
        )
    }
}