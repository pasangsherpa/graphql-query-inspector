import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

import './main.css';

const {
  devtools: {
    panels,
    network: {
      onRequestFinished
    }
  }
} = chrome;

const title = 'GraphQL';
const icon = 'inspect@48.png';
const html = 'main.html';

const renderApp = panelWindow => {
  ReactDOM.render(
    <App onRequestFinished={onRequestFinished}/>,
    panelWindow.document.getElementById('root')
  );
}

// Create a tab in the devtools area
panels.create(title, icon, html, panel => {
  panel.onShown.addListener(renderApp);
});
