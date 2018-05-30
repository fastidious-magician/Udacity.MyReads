import React from 'react';
import SpinnerBox from './components/SpinnerBox/SpinnerBox';
import './SearchPage.css';
import Head from '../../components/Head/Head';
import Foot from '../../components/Foot/Foot';
import Bookshelf from '../../components/Bookshelf/Bookshelf';
import {BooksAPI} from "../../apis/BooksAPI";
import _ from 'lodash';

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
        this.invalidateResults = this.invalidateResults.bind(this);
    }

    componentDidMount() {
        document.title = `Search: "${this.state.search_term}"`;

        this.fetchBooksData();
    }

    fetchBooksData = async () => {

        let search_results = await BooksAPI.searchBooks(this.state.search_term, 10);

        console.log(search_results);
        console.log("^^^ Search results ^^^");

        try {
            search_results.map((item) => {});
        }
        catch (ex) {
            console.log("Invalid result.");
            return;
        }

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

    invalidateResults = () => {
      this.setState({ data_fetched: false });
    };

    onTermChange = _.debounce(async (value) => {
        await this.setState({ search_term: value });
        this.fetchBooksData();
    }, 500);

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
                    <div className="search-page-noinfo-container">
                        <p>No results for search term: "{this.state.search_term}"</p>
                    </div>
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
                      invalidateResults={this.invalidateResults}
                      search_term={this.state.search_term}/>

                {/*<SpinnerBox result_loading={this.state.data_fetched}/>*/}
                {this.resultDisplayControl()}

                <Foot/>
            </div>
        );
    }
}
