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
            <div className="Foot-Main">
                <p>My Reads App</p>
            </div>
        );
    }
}
