import React from 'react'
import ConfigPage from './ConfigurationPage.jsx';

class Main extends React.Component{

    constructor(props){
        super(props);
    }

    handleSubmit = (data) => {

    }
    
    render() { 
        return(
        <ConfigPage 
        handleSubmit={this.handleSubmit} 
        />
        )
    }
}

export default Main;