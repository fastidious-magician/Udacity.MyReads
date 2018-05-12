import React from 'react';
import './MainPage.css';
import Head from '../../components/Head/Head';
import Foot from '../../components/Foot/Foot';
import Bookshelf from "../../components/Bookshelf/Bookshelf";

export default class MainPage extends React.Component {

    constructor(props) {
        super(props);

        this.state = {

        };
    }

    componentDidMount() {
        document.title = "MyReads - Home";
    }

    render() {
        return (
            <div className="HomePage-Main">
                <Head/>
                <div className="main-page-bookshelf-container">
                    <Bookshelf bookshelf_name={"Currently Reading:"}/>
                    <Bookshelf bookshelf_name={"Want to Read:"}/>
                    <Bookshelf bookshelf_name={"Already Read:"}/>
                </div>
                <Foot/>
            </div>
        );
    }
}
