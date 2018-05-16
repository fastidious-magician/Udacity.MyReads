import React from 'react';
import 'url-search-params-polyfill';
import './SearchBar.css';

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
          TERM: this.state.search_term
      });
      return url_params.toString();
    };

    navigateToSearchPage = (event) => {
        let search_url = `/search?${this.generateUrlParams()}`;

        if (event.key === "Enter") {
            window.location = search_url;
        }
        else if (event.getModifierState("Control")) {
            window.open(search_url, "_blank");
        }
    };

    render() {
        return (
            <div className="search-bar-main">
                <input type="text" placeholder="Search for books"/>
                <div className="search-bar-button">
                    <i className="material-icons">search</i>
                </div>
            </div>
        );
    }
}
