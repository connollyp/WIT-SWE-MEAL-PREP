import React, { useState } from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Main from './Components/Main.jsx'
import Login from './Components/Login';

function App() {
	const [token, setToken] = useState();

	if (!token) {
    	return <Login setToken={setToken} />
  	}

    return ( <
        Main / >
    )
}

export default App;