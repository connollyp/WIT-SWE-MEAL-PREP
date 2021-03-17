import React, { useState } from 'react';
import PropTypes from 'prop-types';

async function loginUser(url) {
 return fetch(url, {
   method: 'POST',
   headers: {
     'Content-Type': 'application/json'
   }
 })
   .then(data => data.json())
}

export default function Login({ setToken }) {
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async e => {
    e.preventDefault();
    var url = "http://localhost:8080/login?username='"+String(username)+"'&password='"+String(password)+"'";
    const token = await loginUser(url);

    if (token["success"] === true){
        setToken(token);
    }
  }

  return(
    <div className="login-wrapper">
      <h1>Please Log In</h1>
      <form onSubmit={handleSubmit}>
        <label>
          <p>Username</p>
          <input type="text" onChange={e => setUserName(e.target.value)} />
        </label>
        <label>
          <p>Password</p>
          <input type="password" onChange={e => setPassword(e.target.value)} />
        </label>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  )
}

Login.propTypes = {
  setToken: PropTypes.func.isRequired
};