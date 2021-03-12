import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from '@material-ui/core/styles';
import { BrowserRouter, Router} from 'react-router-dom';
import {Provider} from "mobx-react"
import CssBaseline from '@material-ui/core/CssBaseline';
//
import '@/core';
import App from '@/core/router';
import store from '@/store';
import theme from '@/themes';

ReactDOM.render(
    <ThemeProvider theme={theme} >
        <BrowserRouter basename="/" history={Router.history}>
            <CssBaseline />
            <Provider {...store} >
                <App />
            </Provider>
        </BrowserRouter>
    </ThemeProvider>,
    document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals(({name, id, delta}) => {
//     console.info(`${name} matching ID ${id} changed by ${delta}`);
// })
