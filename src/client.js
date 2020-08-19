import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';



import App from './App';


const client = new ApolloClient({
    uri: 'http://localhost:4001/graphql',
    cache: new InMemoryCache()
});


ReactDOM.hydrate(
    <BrowserRouter>
        <ApolloProvider client={client}>
            <App />
        </ApolloProvider>
    </BrowserRouter>, document.getElementById("root")
);