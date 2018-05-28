import React from 'react';
import { BooksAPI} from "../../../../../apis/BooksAPI";
import './BookOptionMenu.css';
import {outsideClickDetection} from '../../../../../utils/outsideClickDetection';
import {menu_options} from '../../../shelves_menu_options';

export default class BookOptionMenu extends React.Component {

    constructor(props) {
        super(props);

        this.state = {};
    }

    componentDidMount() {
        if (this.props.show) {
            outsideClickDetection(this.refs.book_options_menu, this.onOutsideClick);
        }
    }

    onOutsideClick = () => {
        this.props.closeMenu();
    };

    doItemAction = (item) => {
      switch (item.name) {
          case "currently_reading":
              break;
          case "already_read":
              break;
          case "want_to_read":
              break;
          case "none":
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
