import React from 'react';
import './Head.css';
import './components/SearchBar/SearchBar';
import SearchBar from './components/SearchBar/SearchBar';

export default class Head extends React.Component {

    constructor(props) {
        super(props);

        this.state = {};
    }

    componentDidMount() {

    }

    render() {
        return (
            <div className="Head-Main">
                <SearchBar/>
            </div>
        );
    }
}
