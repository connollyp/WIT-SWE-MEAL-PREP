import React from 'react';
import CreateAccountPage from '../Components/CreateAccountPage.jsx'


export default class AccountCreationController extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            username: "",
            password: "",
            email: ""
        }

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

    setEmail = (email) => {

        console.log(email);

        this.setState({
            email: email
        })
    }

    handleSubmit = async e => {

        //TO-DO set it so it uploads new account credentials to the database

        this.setAccountStatus(true)
    }

    render(){

        return(
            <
            CreateAccountPage handleSubmit = { this.handleSubmit }
            setEmail = { this.setEmail }
            setUserName = { this.setUserName }
            setPassword = { this.setPassword }
            />
        )
    }

}