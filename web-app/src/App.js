import React from 'react';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './pages/home';
import SignIn from './pages/sign-in';

function App() {
    return (
        <Router>
            <Route exact path='/' component={SignIn} />
            <Route path='/Home' component={Home} />
        </Router>
    );
}

export default App;
