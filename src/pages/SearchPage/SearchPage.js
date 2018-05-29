import React from 'react';
import './SearchPage.css';
import Head from '../../components/Head/Head';
import Foot from '../../components/Foot/Foot';
import SearchPageHeader from './components/SearchPageHeader/SearchPageHeader';
import Bookshelf from '../../components/Bookshelf/Bookshelf';
import {BooksAPI} from "../../apis/BooksAPI";

export default class SearchPage extends React.Component {

    constructor(props) {
        super(props);

        let search_params = new URLSearchParams(window.location.search);
        // search_params.get("")

        this.state = {
            search_term: "",

            unreads: [],
            currently_readings: [],
            want_to_reads: [],
            already_reads: [],

            data_fetched: false
        };

        this.fetchBooksData = this.fetchBooksData.bind(this);
    }

    componentDidMount() {
        document.title = `Search: "${this.state.search_term}"`;

        this.fetchBooksData();
    }

    fetchBooksData = async () => {
        let all_books = await BooksAPI.getAllBooks();

        let currently_readings = [];
        let already_reads = [];
        let want_to_reads = [];
        all_books.map((item) => {
            switch (item.shelf) {
                case "currentlyReading":
                    currently_readings.push(item);
                    break;
                case "read":
                    already_reads.push(item);
                    break;
                case "wantToRead":
                    want_to_reads.push(item);
                    break;
                default:
                    break;
            }
        });

        this.setState({
            currently_readings: currently_readings,
            already_reads: already_reads,
            want_to_reads: want_to_reads,

            data_fetched: true
        });
    };

    render() {

        return (
            <div className="search-page-main">
                <SearchPageHeader
                    search_term={this.state.search_term}/>

                <div className="search-page-content-container">
                    <Bookshelf bookshelf_name={"Unread:"}
                               books={this.state.unreads}
                               data_fetched={this.state.data_fetched}
                               fetchBooksData={this.fetchBooksData}/>
                    <Bookshelf bookshelf_name={"Currently Reading:"}
                               books={this.state.currently_readings}
                               data_fetched={this.state.data_fetched}
                               fetchBooksData={this.fetchBooksData}/>
                    <Bookshelf bookshelf_name={"Want to Read:"}
                               books={this.state.want_to_reads}
                               data_fetched={this.state.data_fetched}
                               fetchBooksData={this.fetchBooksData}/>
                    <Bookshelf bookshelf_name={"Already Read:"}
                               books={this.state.already_reads}
                               data_fetched={this.state.data_fetched}
                               fetchBooksData={this.fetchBooksData}/>
                </div>

                <Foot/>
            </div>
        );
    }
}
