import React from 'react';
import './BookDisplay.css';
import BookMoveMenu from './BookMoveMenu/BookMoveMenu';
import Bookshelf from "../../Bookshelf";
import BookOptionMenu from './BookOptionMenu/BookOptionMenu';

export default class BookDisplay extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            show_options_menu: false
        };

        this.showOptionsMenu = this.showOptionsMenu.bind(this);
        this.closeOptionsMenu = this.closeOptionsMenu.bind(this);
    }

    showOptionsMenu = async () => {
        this.setState({ show_options_menu: true });
    };

    closeOptionsMenu = () => {
        this.setState({ show_options_menu:  false });
    };

    menuOptionsDisplay = () => {
        if (this.state.show_options_menu) {
            return (
                <div className="book-display-menu-button" onClick={this.showOptionsMenu}>
                    <BookOptionMenu
                        book_id={this.props.book.id}
                        show={this.state.show_options_menu}
                        closeMenu={this.closeOptionsMenu}
                        fetchBooksData={this.props.fetchBooksData}/>
                </div>
            );
        }

        return (
            <div className="book-display-menu-button" onClick={this.showOptionsMenu}>
                <i className="material-icons">more_vert</i>
            </div>
        )
    };


    render() {
        let book = this.props.book;

        let b_style = {
            height: "193px",
            width: "128px"
        };

        if (book.imageLinks) {
            if (book.imageLinks.smallThumbnail !== undefined) {
                b_style["backgroundImage"] = `url(${book.imageLinks.smallThumbnail}`;
            }
        }

        let author = "No author available.";
        if (book.authors !== undefined) {
            author = book.authors[0];
        }

        return (
            <div className="book-display-main">
                <div className="book-display-cover" style={b_style}>
                    {this.menuOptionsDisplay()}
                </div>
                <p className="book-display-title-text">{book.title}</p>
                <p className="book-display-author-text">{author}</p>
            </div>
        )
    }
}