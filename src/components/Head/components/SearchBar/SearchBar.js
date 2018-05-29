import React from 'react';
import 'url-search-params-polyfill';
import './SearchBar.css';

let nav_to_search_time = 1000;

export default class SearchBar extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            search_term: ""
        };
    }

    componentDidMount() {
        console.log(window.location.pathname);
    }

    generateUrlParams = () => {
        let url_params = new URLSearchParams({
            term: this.state.search_term
        });
        return url_params.toString();
    };

    navigateToSearchPage = (event, direct) => {
        let search_url = `/search?${this.generateUrlParams()}`;

        console.log("Search url: " + search_url);

        if (direct) {
            window.location = search_url;
        }

        if (event.key === "Enter") {
            window.location = search_url;
        }
        else if (event.key === "Control") {
            window.open(search_url, "_blank");
        }
    };

    render() {
        return (
            <div className="search-bar-main">
                <input type="text" placeholder="Search for books"
                       onChange={(event) => {

                           console.log("val: " + event.target.value);

                           this.setState({
                               search_term: event.target.value
                           });
                       }}
                       onKeyDown={(event) => {
                           if (event.key === "Enter") {
                               this.navigateToSearchPage(event);
                           }
                       }}
                       onFocus={(event) => {
                           console.log("this has been focused")
                           this.navigateToSearchPage(event);
                           setTimeout(() => {
                               this.navigateToSearchPage(event, true);
                           }, 1)
                       }}
                />
                <div className="search-bar-button">
                    <i className="material-icons">search</i>
                </div>
            </div>
        );
    }
}
