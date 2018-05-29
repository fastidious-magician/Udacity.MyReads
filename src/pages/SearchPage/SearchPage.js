import React from 'react';
import './SearchPage.css';
import Head from '../../components/Head/Head';
import Foot from '../../components/Foot/Foot';
import Bookshelf from '../../components/Bookshelf/Bookshelf';
import {BooksAPI} from "../../apis/BooksAPI";

export default class SearchPage extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            search_term: "",

            all_results: [],

            uncategorized: [],
            currently_readings: [],
            want_to_reads: [],
            already_reads: [],

            data_fetched: false
        };

        this.fetchBooksData = this.fetchBooksData.bind(this);
        this.onTermChange = this.onTermChange.bind(this);
    }

    componentDidMount() {
        document.title = `Search: "${this.state.search_term}"`;

        this.fetchBooksData();
    }

    fetchBooksData = async () => {

        let search_results = await BooksAPI.searchBooks(this.state.search_term, 100);

        console.log(search_results);
        console.log("^^^ Search results ^^^");

        let currently_readings = [];
        let already_reads = [];
        let want_to_reads = [];
        let uncategorized = [];
        search_results.map((item) => {
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
                    uncategorized.push(item);
                    break;
            }
        });

        this.setState({
            all_results: search_results,
            currently_readings: currently_readings,
            already_reads: already_reads,
            want_to_reads: want_to_reads,
            uncategorized: uncategorized,

            data_fetched: true
        });
    };

    onTermChange = (value) => {
        this.fetchBooksData();

        // this.setState({ search_term: value });
        // get new books
        // organize into categories
    };

    resultDisplayControl = () => {

        if (this.state.search_term.length === 0) {
            return (
                <div className="search-page-content-container" style={{minHeight: "800px"}}>
                    <div className="search-page-default-container" style={{marginBottom: "0px"}}>
                        <i className="material-icons">arrow_upward</i>
                    </div>
                    <div className="search-page-default-container" style={{marginTop: "0px"}}>
                        <p>Search for books</p>
                    </div>
                </div>
            )
        }

        if (this.state.all_results.length === 0) {
            return (
                <div className="search-page-content-container">
                    <p>No results for search term: "{this.state.search_term}"</p>
                </div>
            )
        }

        return (
            <div className="search-page-content-container">
                <Bookshelf bookshelf_name={"Uncategorized:"}
                           books={this.state.uncategorized}
                           data_fetched={this.state.data_fetched}
                           show={this.state.uncategorized.length > 0}
                           fetchBooksData={this.fetchBooksData}/>
                <Bookshelf bookshelf_name={"Currently Reading:"}
                           books={this.state.currently_readings}
                           data_fetched={this.state.data_fetched}
                           show={this.state.currently_readings.length > 0}
                           fetchBooksData={this.fetchBooksData}/>
                <Bookshelf bookshelf_name={"Want to Read:"}
                           books={this.state.want_to_reads}
                           data_fetched={this.state.data_fetched}
                           show={this.state.want_to_reads.length > 0}
                           fetchBooksData={this.fetchBooksData}/>
                <Bookshelf bookshelf_name={"Already Read:"}
                           books={this.state.already_reads}
                           data_fetched={this.state.data_fetched}
                           show={this.state.data_fetched > 0}
                           fetchBooksData={this.fetchBooksData}/>
            </div>
        )
    };

    render() {

        return (
            <div className="search-page-main">
                <Head on_search_page={true}
                      onTermChange={this.onTermChange}
                      search_term={this.state.search_term}/>

                {this.resultDisplayControl()}

                <Foot/>
            </div>
        );
    }
}
