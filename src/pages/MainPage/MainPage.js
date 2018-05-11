import React from 'react';
import './MainPage.css';
import Head from '../../components/Head/Head';
import Foot from '../../components/Foot/Foot';
import BooksDisplay from './components/BooksDisplay/BooksDisplay';

export default class MainPage extends React.Component {

    constructor(props) {
        super(props);

        this.state = {

        };
    }

    componentDidMount() {

    }

    render() {
        return (
            <div className="HomePage-Main">
                <Head/>

                <Foot/>
            </div>
        );
    }
}
