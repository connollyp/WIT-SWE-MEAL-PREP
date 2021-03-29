import React, { useState } from 'react';

// import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MainController from './Controllers/MainController.jsx'
import AccountStatusController from './Controllers/AccountStatusController.jsx';

function App() {
    const [loggedIn, isLoggedIn] = useState();

    if (!loggedIn) {
        return <AccountStatusController isLoggedIn = { isLoggedIn }
        />
    }

    return ( <
        MainController / >
    )
}

export default App;