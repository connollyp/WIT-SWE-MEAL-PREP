import React from 'react'
import ConfigPage from './ConfigurationPage.jsx';

class Main extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            configured: false
        }
    }

    handleSubmit = () => {
        this.setState({
            configured: true
        })
    }
    
    render() { 

        if(this.state.configured){

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

export default Main;