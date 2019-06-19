import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Counter from './components/Counter';
import * as serviceWorker from './serviceWorker';
import { observable } from 'mobx';
import items from './components/item'

const appState = observable ({
    count: 0,
    data: items,
    // incCount: () => {
    //     appState.count +=1;
    // },
    // decCount: () => {
    //     appState.count -=1;
    // }
});


ReactDOM.render(
    <Counter appState={appState} />, 
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
