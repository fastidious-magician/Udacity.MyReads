import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom';
import './index.css';
import HomePage from './pages/MainPage/MainPage';
import SearchPage from './pages/SearchPage/SearchPage';
import registerServiceWorker from './registerServiceWorker';

const RoutingHandler = () => {

    return (
        <BrowserRouter>
            <div>
                <Route exact={true} path="/" component={HomePage}/>
                <Route exact={true} path="/search" component={SearchPage}/>
            </div>
        </BrowserRouter>
    );
};

ReactDOM.render(<RoutingHandler/>, document.getElementById('root'));
registerServiceWorker();
