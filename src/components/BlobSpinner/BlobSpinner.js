import React from 'react';
import './BlobSpinner.css';

export default class BlobSpinner extends React.Component {

    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        let spinner_style = {
            minHeight: this.props.height,
            maxHeight: this.props.height,
            minWidth: this.props.width,
            maxWidth: this.props.width
        };

        return (
            <div className="BlobSpinner-Main" style={spinner_style}>
            </div>
        );
    }
}
