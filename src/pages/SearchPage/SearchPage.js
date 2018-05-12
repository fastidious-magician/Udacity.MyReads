import React from 'react';
import './SearchPage.css';
import Head from '../../components/Head/Head';
import Foot from '../../components/Foot/Foot';

export default class SearchPage extends React.Component {

    constructor(props) {
        super(props);

        this.state = {};
    }

    componentDidMount() {

    }

    render() {

        return (
            <div className="search-page-main">
                <Head/>

                <Foot/>
            </div>
        );
    }
}
