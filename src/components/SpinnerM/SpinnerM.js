import React from 'react';
import './SpinnerM.css';

export default class SpinnerM extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let class_name = `SpinnerM-Main ${this.props.main_class_name}`;
        return (
            <div className={class_name}>
                <div className="SpinnerM-Loader2">


                </div>
            </div>
        )
    }
}