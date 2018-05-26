import React from 'react';
import {BooksAPI} from "../../apis/BooksAPI";
import './MainPage.css';
import Head from '../../components/Head/Head';
import Foot from '../../components/Foot/Foot';
import Bookshelf from "../../components/Bookshelf/Bookshelf";

export default class MainPage extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            currently_readings: [],
            reads: [],
            want_to_reads: [],

            data_fetched: false
        };

        this.fetchBooksData = this.fetchBooksData.bind(this);
    }

    componentDidMount() {
        document.title = "MyReads - Home";

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
            <div className="HomePage-Main">
                <Head/>
                <div className="main-page-bookshelf-container">
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
