import React, { useState } from 'react';

// import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MainController from './Controllers/MainController.jsx'
import AccountStatusController from './Controllers/AccountStatusController.jsx';
import Footer from './Components/Footer.jsx'

import './Stylings/AppStylings.css'

function App() {
    const [loggedIn, isLoggedIn] = useState();

    if (!loggedIn) {
        return <AccountStatusController isLoggedIn = { isLoggedIn }
        />
    }

    return (
        <div className="mainAppWrapper">
            <MainController/>
            <Footer/>
        </div>
    )
}

export default App;