import React from 'react';
import {BooksAPI} from "../../../../../apis/BooksAPI";
import './BookOptionMenu.css';
import {menu_options} from '../../../shelves_menu_options';

export default class BookOptionMenu extends React.Component {

    constructor(props) {
        super(props);
    }

    doItemAction = async (item) => {
        switch (item.name) {
            case "currently_reading":
                console.log("Doing action for currently reading");
                let d = await BooksAPI.updateBookshelf(item.id, "currentlyReading");
                console.log(d);
                this.props.closeOptionsMenu();
                break;
            case "already_read":
                console.log("Doing action for already read.");
                break;
            case "want_to_read":
                console.log("Doing action for want to read.");
                break;
            case "none":
                console.log("Doing action for none.");
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

            return (
                <div className="book-options-menu-main" ref="book_options_menu">
                    {menu_options.map((item, index) =>
                        <div className="book-options-menu-item" onClick={(e) => {
                            e.stopPropagation();
                            console.log(item);
                            this.doItemAction(item);
                            this.props.closeMenu();
                        }} key={index}>
                            <p>{item.display_str}</p>
                        </div>
                    )}
                </div>
            );
        }

        return (<div></div>);
    }
}
