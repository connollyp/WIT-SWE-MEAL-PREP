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
            password: '',
            constraints: {
                numMeals: 0,
                calories: 0,
                protein: 0,
                carbs: 0,
                fat: 0,
                sugar: 0,
                fiber: 0,
                vegan: false,
                vegetarian: false
            }
        }
    }

    handleSubmit = () => {
        this.setState({
            configured: true,
            constraints:{
                numMeals: document.getElementById("numMeals").value,
                calories: document.getElementById("calories").value,
                protein: document.getElementById("protein").value,
                carbs: document.getElementById("carbs").value,
                fat: document.getElementById("fat").value,
                sugar: document.getElementById("sugar").value,
                fiber: document.getElementById("fiber").value,
                vegan: document.getElementById("vegan").checked,
                vegetarian: document.getElementById("vegetarian").checked
            }
        })
    }

    handleLogIn = () => {

        //Should send to database to verify that its working, if not set logged in to false and display error
        //Should make a log in controller for this

        this.setState({
            username: document.getElementById("username").value,
            password: document.getElementById("password").value,
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