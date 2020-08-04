import React, { Component, Fragment } from 'react'
import { Switch, Route } from 'react-router'
import { Provider } from 'react-redux'

// Redux 
import store from './store';

// Main Route File  
import routes from './routes/index';

// Navigation Bar
import Navbar from './components/Navbar/Navbar'


export class App extends Component {
    render() {
        const routeComponents = routes.map(({ path, component }, key) => <Route exact path={path} component={component} key={key} />);
        return (
            <>
                <Provider store={store}>
                    <Navbar />
                    <Switch>
                        {routeComponents}
                    </Switch>
                </Provider>
            </>
        )
    }
}

export default App
