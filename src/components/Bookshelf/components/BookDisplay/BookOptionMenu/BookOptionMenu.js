import React from 'react';
import {BooksAPI} from "../../../../../apis/BooksAPI";
import './BookOptionMenu.css';
import {outsideClickDetection} from '../../../../../utils/outsideClickDetection';
import {menu_options} from '../../../shelves_menu_options';

export default class BookOptionMenu extends React.Component {

    constructor(props) {
        super(props);

        this.state = {};

        this.onOutsideClick = this.onOutsideClick.bind(this);
    }

    componentDidMount() {
        if (this.props.show) {
            if (!BookOptionMenu.aMenuIsOpen) {
                outsideClickDetection(this.refs.book_options_menu, this.onOutsideClick);
            }
        }
    }

    static aMenuIsOpen = false;

    onOutsideClick = () => {
        this.props.closeMenu();
    };

    doItemAction = (item) => {
        switch (item.name) {
            case "currently_reading":
                console.log("Doing action for currently reading");
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

    render() {

        if (this.props.show) {
            return (
                <div className="book-options-menu-main" ref="book_options_menu">
                    {menu_options.map((item, index) =>
                        <div className="book-options-menu-item" onClick={(e) => {
                            e.stopPropagation();
                            console.log(item);
                            this.doItemAction(item);
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
