import React from 'react';
import {BooksAPI} from "../../../../../apis/BooksAPI";
import './BookOptionMenu.css';
import {menu_options} from '../../../shelves_menu_options';

export default class BookOptionMenu extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            "on_search_page": (window.location.indexOf("search") > -1)
        }
    }

    doItemAction = async (option_item) => {

        let d = {};
        switch (option_item.name) {
            case "currently_reading":
                console.log("Doing action for currently reading");
                d = await BooksAPI.update(this.props.book_id, "currentlyReading");
                console.log(d);
                console.log("RESPONSE")
                this.props.fetchBooksData();
                break;
            case "already_read":
                console.log("Doing action for already read.");
                d = await BooksAPI.update(this.props.book_id, "read");
                console.log(d);
                this.props.fetchBooksData();
                break;
            case "want_to_read":
                console.log("Doing action for want to read.");
                d = await BooksAPI.update(this.props.book_id, "wantToRead");
                console.log(d);
                this.props.fetchBooksData();
                break;
            case "none":
                console.log("Doing action for none.");
                d = await BooksAPI.update(this.props.book_id, "none");
                console.log(d);
                this.props.fetchBooksData();
                break;
            default:
                break;
        }
    };

    handleMenuClickEvent = (event) => {
        try {
            if (!this.refs.book_options_menu.contains(event.target)) {
                this.props.closeMenu();
                window.removeEventListener('mousedown', this.handleMenuClickEvent, false);
                console.log('removing evt listener');
            }
        }
        catch (ex) {
            try {
                window.removeEventListener('mousedown', this.handleMenuClickEvent, false);
            }
            catch (ex) {
                console.log("Failed to remove.");
            }
        }
    };

    render() {

        if (!this.props.show) {
            window.removeEventListener('mousedown', this.handleMenuClickEvent, false);
            console.log('removing evt listener');
        }

        if (this.props.show) {
            window.addEventListener('mousedown', this.handleMenuClickEvent, false);
            console.log('added event listener');

            let filtered_menu_options = menu_options.slice();
            if (this.state.on_search_page) {
                delete filtered_menu_options[3]
            }

            return (
                <div className="book-options-menu-main" ref="book_options_menu">
                    {filtered_menu_options.map((option_item, index) =>
                        <div className="book-options-menu-item" onClick={(e) => {
                            e.stopPropagation();
                            console.log(option_item);
                            this.doItemAction(option_item);
                            this.props.closeMenu();
                        }} key={index}>
                            <p>{option_item.display_str}</p>
                        </div>
                    )}
                </div>
            );
        }

        return (<div></div>);
    }
}
