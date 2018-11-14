import React, {Component, Fragment} from 'react';

export default class Results extends Component {

    render() {

        return(
            <Fragment>
                <h1>Thank you name</h1>
                <h3>You scored x points from a possible 150 in our cash flow quiz</h3>
                <button>Try Again</button>
            </Fragment>
        )
    }
}