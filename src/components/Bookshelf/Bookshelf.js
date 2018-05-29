import React from 'react';
import './Bookshelf.css';
import BookDisplay from './components/BookDisplay/BookDisplay';
import SpinnerM from '../../components/SpinnerM/SpinnerM';

export default class Bookshelf extends React.Component {

    constructor(props) {
        super(props);

        this.state = {};
    }

    componentDidMount() {

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
                    <p>No books to display.</p>
                </div>
            )
        }

        if (!this.props.show) {
            return (<div></div>);
        }

        return (
            <div className="bookshelf-books-display">
                {this.props.books.map((item, index) =>
                    <BookDisplay book={item} key={index}
                                 fetchBooksData={this.fetchBooksData}/>
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
