import React from 'react';
import { render } from 'react-dom';
import App from './app';
import store from './rootStore';
import { Provider } from 'react-redux'

render(
    <Provider>
        <App />
    </Provider>
    , document.getElementById('root'));
