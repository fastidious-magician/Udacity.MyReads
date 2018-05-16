import React from 'react';
import './Head.css';
import './components/SearchBar/SearchBar';
import SearchBar from './components/SearchBar/SearchBar';
import ReactLogo from '../../resources/react_logo.svg'

export default class Head extends React.Component {

    constructor(props) {
        super(props);

        this.state = {};
    }

    componentDidMount() {

    }

    render() {
        return (
            <div className="head-main">
                <div className="head-logo-container">
                    <h3>Udacity.MyReads</h3>
                </div>
                <div className="head-search-bar-container">
                    <SearchBar/>
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
