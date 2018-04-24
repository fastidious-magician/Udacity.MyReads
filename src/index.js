import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom';
import './index.css';
import HomePage from './pages/MainPage/MainPage';
import registerServiceWorker from './registerServiceWorker';

const RoutingHandler = () => {

    return (
        <BrowserRouter>
            <div>
                <Route exact={true} path="/" component={HomePage}/>
            </div>
        </BrowserRouter>
    );
};

ReactDOM.render(<RoutingHandler/>, document.getElementById('root'));
registerServiceWorker();
