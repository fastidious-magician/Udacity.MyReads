import React from 'react';
import './BookDisplay.css';
import BookMoveMenu from './BookMoveMenu/BookMoveMenu';
import Bookshelf from "../../Bookshelf";

export default class BookDisplay extends React.Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {

    }


    handleMenuButtonClick = (event) => {
        let x_pos = event.clientX;
        let y_pos = event.clientY;
        console.log(`X: ${x_pos}, Y: ${y_pos}`);
    };

    render() {
        // console.log(this.props.book);
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
                    <div className="book-display-menu-button" onClick={(event) => {
                        this.handleMenuButtonClick(event);
                    }}>
                        <i className="material-icons">more_vert</i>
                    </div>
                    {/*<BookMoveMenu fetchBooksData={this.props.fetchBooksData}/>*/}
                </div>
                <p className="book-display-title-text">{book.title}</p>
                <p className="book-display-author-text">{book.authors[0]}</p>
            </div>
        )
    }
}