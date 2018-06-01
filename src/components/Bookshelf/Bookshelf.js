import React from 'react';
import './Bookshelf.css';
import BookDisplay from './components/BookDisplay/BookDisplay';
import SpinnerM from '../../components/SpinnerM/SpinnerM';

export default class Bookshelf extends React.Component {

    constructor(props) {
        super(props);
    }

    controlBooksDisplay = () => {
        if (!this.props.data_fetched) {
            return (
                <div className="bookshelf-books-display">
                    <SpinnerM main_class_name={"AoiReportPage-LoadingSpinner-SpinnerMain"}/>
                </div>
            )
        }

        if (this.props.books.length === 0) {
            return (
                <div className="bookshelf-books-display">
                    <p className="bookshelf-nobooks">No books to display.</p>s
                </div>
            )
        }

        return (
            <div className="bookshelf-books-display">
                {this.props.books.map((item, index) =>
                    <BookDisplay book={item} key={index}
                                 fetchBooksData={this.props.fetchBooksData}/>
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
