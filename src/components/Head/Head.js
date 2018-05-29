import React from 'react';
import './Head.css';
import './components/SearchBar/SearchBar';
import SearchBar from './components/SearchBar/SearchBar';
import ReactLogo from '../../resources/react_logo.svg'

export default class Head extends React.Component {

    constructor(props) {
        super(props);
    }

    logoArrowDisplay = () => {
        if (this.props.on_search_page) {
            return (
                <div className="head-logo-container" style={{paddingLeft: "5%"}}>
                    <i className="material-icons" onClick={() => {
                        window.location = "/";
                    }}>arrow_back</i>
                </div>
            );
        }

        return (
            <div className="head-logo-container">
                <h3>Udacity.MyReads</h3>
            </div>
        );
    };

    render() {
        return (
            <div className="head-main">
                {this.logoArrowDisplay()}
                <div className="head-search-bar-container">
                    <SearchBar
                        search_term={this.props.search_term}
                        onTermChange={this.props.onTermChange}
                        on_search_page={this.props.on_search_page}/>
                </div>
                <div style={{flex: "1"}}>
                    <div className="head-react-logo-container">
                        <img src={ReactLogo} className="head-react-logo"/>
                    </div>
                </div>
            </div>
        );
    }
}
