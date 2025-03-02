// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import App from './App';
import { AiAssistantProvider } from "@sista/ai-assistant-react";

ReactDOM.render(
  <Provider store={store}>
    <AiAssistantProvider apiKey='pk-sista-eab95cdb-7330-43cb-b124-ec84da621b10'>
    <App />
    </AiAssistantProvider>
  </Provider>,
  document.getElementById('root')
);
