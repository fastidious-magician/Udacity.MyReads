import React from 'react';
import './SearchPageHeader.css';
import Foot from '../../../../components/Foot/Foot';

export default class SearchPageHeader extends React.Component {

    constructor(props) {
        super(props);

        this.state = {};
    }

    componentDidMount() {

    }

    render() {
        return (
            <div>
                <div className="search-page-header-main">
                    <div className="search-page-header-back-button-container">
                        <i className="material-icons" onClick={() => {
                            window.location = "/";
                        }}>arrow_back</i>
                    </div>
                </div>

                <div className="search-page-content-container">

                </div>
            </div>
        );
    }
}
