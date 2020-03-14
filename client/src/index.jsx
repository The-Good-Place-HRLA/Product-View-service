import React from 'react';
import App from './components/App.jsx';
import { hydrate } from 'react-dom';

hydrate(<App />, document.getElementById("product-view"));