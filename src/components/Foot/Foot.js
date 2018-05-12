import React from 'react';
import './Foot.css';

export default class Foot extends React.Component {

    constructor(props) {
        super(props);

        this.state = {};
    }

    componentDidMount() {

    }

    render() {
        return (
            <div className="foot-main">
                <div className="foot-info-container">
                    <h4>My Reads App</h4>
                    <p>Created by Matthew</p>
                </div>
            </div>
        );
    }
}
