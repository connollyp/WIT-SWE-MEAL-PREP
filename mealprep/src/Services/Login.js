import React, { useState } from 'react';
import PropTypes from 'prop-types';
import LoginPage from '../Components/LoginPage.jsx'

async function loginUser(url) {
    return fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(data => data.json())
}

export default function Login({ isLoggedIn }) {
    const [username, setUserName] = useState();
    const [password, setPassword] = useState();

    const handleSubmit = async e => {
        e.preventDefault();
        var url = "http://localhost:8080/login?username='" + String(username) + "'&password='" + String(password) + "'";
        const token = await loginUser(url);

        if (token["success"] === true) {
            isLoggedIn(token);
        }
    }

    return ( <
        LoginPage handleSubmit = { handleSubmit }
        setUserName = { setUserName }
        setPassword = { setPassword }
        />
    )
}

Login.propTypes = {
    isLoggedIn: PropTypes.func.isRequired
};