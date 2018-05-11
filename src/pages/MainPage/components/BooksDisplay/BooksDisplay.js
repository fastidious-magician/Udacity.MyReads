import React from 'react';
import './BooksDisplay.css';
import { BooksAPI } from '../../../../apis/BooksAPI';

export default class BooksDisplay extends React.Component {

    constructor(props) {
        super(props);
        
        this.state = {
            all_books: []
        };
    }

    componentDidMount() {

    }

    getAllBooks = async () => {
        let all_books = BooksAPI.getAll();
        this.setState({all_books});
    };

    render() {
        return (
            <div className="BooksDisplay-Main">

            </div>
        );
    }
}
