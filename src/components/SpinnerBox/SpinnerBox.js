import React from 'react';
import BlobSpinner from '../../../../components/BlobSpinner/BlobSpinner';
import './SpinnerBox.css';

export default class SpinnerBox extends React.Component {

    constructor(props) {
        super(props);

        this.state = {};
    }

    componentDidMount() {

    }

    render() {
        if (this.props.result_loading) {
            return (
                <div className="SpinnerBox-Main">
                    <BlobSpinner height={"35px"} width={"35px"}/>
                </div>
            );
        }
        return (<div className="SpinnerBox-Main SpinnerBox-Minimized"></div>);
    }
}
