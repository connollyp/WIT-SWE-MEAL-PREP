import React from 'react'
import ConfigPage from './ConfigurationPage.jsx';
import LogInPage from './LogInPage.jsx'

class Main extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            configured: false,
            loggedIn: false,
            username: '',
            password: ''
        }
    }

    handleSubmit = () => {
        this.setState({
            configured: true,
        })
    }

    handleLogIn = () => {

        this.setState({
            username: document.getElementById("username").value,
            password: document.getElementById("password").value
        })
        

        //Should send to database to verify that its working
        //Should make a log in controller for this

        this.setState({
            loggedIn: true
        })

    }
    
    render() { 

        if(this.state.loggedIn){
            if(this.state.configured){

                console.log(this.state);

                return(<div><h1>Configured</h1></div>)
    
            }else{
                return(
                    <ConfigPage 
                    handleSubmit={this.handleSubmit} 
                    />
                    )
            }
        }else{
            return(
            <LogInPage 
            handleLogIn={this.handleLogIn}
            />
            )
        }

    }
}

export default Main;