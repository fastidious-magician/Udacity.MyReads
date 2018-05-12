import React from 'react';
import './Bookshelf.css';
import BookDisplay from './components/BookDisplay/BookDisplay';

export default class Bookshelf extends React.Component {

    constructor(props) {
        super(props);

        this.state = {};
    }

    componentDidMount() {

    }

    controlBooksDisplay = () => {
        if (!this.props.books) {
            return (
                <div className="bookshelf-books-display">
                    <p>No books to display.</p>
                </div>
            )
        }

        return (
            <div className="bookshelf-books-display">
                {this.props.books.map((item) =>
                    <BookDisplay book={item}/>
                )}
            </div>
        )
    };

    render() {
        return (
            <div className="bookshelf-main">
                <div className="bookshelf-title-container">
                    <h4>{this.props.bookshelf_name}</h4>
                </div>
                {this.controlBooksDisplay()}
            </div>
        );
    }
}
