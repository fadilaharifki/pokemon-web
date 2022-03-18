import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  ApolloProvider,
} from '@apollo/client'
import { BrowserRouter as Router } from 'react-router-dom'

import { client } from './graphql/config'
import { MyPokemonProvider } from './utils/myPokemonContext';

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <MyPokemonProvider>
        <Router>
          <App />
        </Router>
      </MyPokemonProvider>
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
