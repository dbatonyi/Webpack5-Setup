import 'regenerator-runtime/runtime';

import React from 'react';
import ReactDOM from 'react-dom';
import DefaultComponent from './assets/defaultComponent.jsx';

const getContainer = document.querySelector(".region-content");

function App() {

    return (
        <DefaultComponent />
    );
}

if (getContainer) {
    document.body.classList.add('wp-5__reacted');
    ReactDOM.render(<App />, getContainer);
}
