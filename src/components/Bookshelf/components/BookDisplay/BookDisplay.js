import React from 'react';
import './BookDisplay.css';

export default class BookDisplay extends React.Component {
    constructor(props) {
        super(props);

        this.state  = {};
    }

    render() {
        console.log(this.props.book);
        let book = this.props.book;

        console.log(book.imageLinks.smallThumbnail);

        let b_style = {
            height: "193px",
            width: "128px",
            backgroundImage: `url(${book.imageLinks.smallThumbnail}`
        };

        return (
            <div className="book-display-main">
                <div className="book-display-cover" style={b_style}>

                </div>
                <p className="book-display-title-text">{book.title}</p>
                <p className="book-display-author-text">{book.authors[0]}</p>
            </div>
        )
    }
}