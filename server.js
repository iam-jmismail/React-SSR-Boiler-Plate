import 'babel-polyfill';
import express from 'express';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router';
import fs from 'fs';


// App Component 
import App from './src/App';

const app = express();
const port = 4001;

// Middlewares 
app.use(express.json())

// Static Folder 
app.use(express.static('build/public'));

// Routes
app.get('*', (req, res) => {

    const context = {};

    const content = ReactDOMServer.renderToString(
        <StaticRouter location={req.url} context={context}>
            <App />
        </StaticRouter>
    )

    console.log('Requested URL ', req.url);

    fs.readFile('./index.html', 'utf-8', (err, data) => {

        if (err) {
            console.error('Something went wrong:', err);
            res.status(500).send('Oops, better luck next time!');
        }

        const html = data.replace("<div id='root'>", "<div id='root'>" + content + "</div>")
        res.send(html);
    })

})

app.listen(port, () => { console.log(`Server running on PORT : ${port}`) })