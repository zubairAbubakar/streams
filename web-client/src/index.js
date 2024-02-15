import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';

import App from './components/App';
import Welcome from './components/Welcome';

ReactDOM.render(
    <BrowserRouter>
        <App>
            <Routes>
                <Route path="/" exact component={Welcome} />
            </Routes>
        </App>
    </BrowserRouter>,
    document.querySelector('#root')
);
