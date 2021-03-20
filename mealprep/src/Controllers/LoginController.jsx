import React from 'react';
import LoginPage from '../Views/LoginPage.jsx'
import loginUser from '../Services/LoginUser.js'

export default class LoginController extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            username: "",
            password: ""
        }

        this.isLoggedIn = this.props.isLoggedIn.bind(this);
        this.setAccountStatus = this.props.setAccountStatus.bind(this);
    }

    setUserName = (username) => {

        console.log(username)

        this.setState({
            username: username
        })
    }

    setPassword = (password) => {

        console.log(password)

        this.setState({
            password: password
        })
    }

    handleSubmit = async e => {
        e.preventDefault();
        var url = "http://localhost:8080/login?username='" + String(this.state.username) + "'&password='" + String(this.state.password) + "'";
        const token = await loginUser(url);

        if (token["success"] === true) {
            this.isLoggedIn(token);
        }
    }

    render(){

        return(
            <
            LoginPage handleSubmit = { this.handleSubmit }
            setUserName = { this.setUserName }
            setPassword = { this.setPassword }
            setAccountStatus = { this.setAccountStatus }
            />
        )
    }

}