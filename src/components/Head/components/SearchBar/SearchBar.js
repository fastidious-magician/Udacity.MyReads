import React from 'react';
import 'url-search-params-polyfill';
import './SearchBar.css';

let nav_to_search_time = 1000;

export default class SearchBar extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        console.log("Focusing on the search input bar.");
        if (this.props.on_search_page) {
            this.refs.search_input.focus();
        }
    }

    navigateToSearchPage = (event, direct) => {
        let search_url = `/search`;

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
                       ref="search_input"
                       onChange={(event) => {

                           if (this.props.on_search_page) {
                               this.props.invalidateResults();
                               this.props.onTermChange(event.target.value);
                           }
                       }}
                       onKeyDown={(event) => {
                           if (event.key === "Enter") {
                               if (!this.props.on_search_page) {
                                   this.navigateToSearchPage(event);
                               }
                               else {

                               }
                           }
                       }}
                       onFocus={(event) => {
                           if (!this.props.on_search_page) {
                               this.navigateToSearchPage(event, true);
                           }
                       }}
                />
                <div className="search-bar-button" onClick={(e) => {
                    if (!this.props.on_search_page) {
                        this.navigateToSearchPage(e);
                    }
                    else {

                    }
                }}>
                    <i className="material-icons">search</i>
                </div>
            </div>
        );
    }
}
