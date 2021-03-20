import React from 'react';
import ConfigPage from '../Components/ConfigurationPage.jsx';

class MainController extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            configured: false,
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
   
    render() { 

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
    }
}

export default MainController;