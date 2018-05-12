import React from 'react';
import './BookDisplay.css';

export default class BookDisplay extends React.Component {
    constructor(props) {
        super(props);

        this.state  = {};
    }

    render() {
        // this.props.book
        return (
            <div className="book-display-main">
                <p>Book Name:</p>
            </div>
        )
    }
}