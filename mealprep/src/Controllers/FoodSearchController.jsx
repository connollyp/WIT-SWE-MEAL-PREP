import React from 'react';
import getFood from '../Models/GetFood.js'

import SearchResults from '../Views/SearchResults.jsx'

export default class FoodSearchController extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            searchQuery: this.props.searchQuery,
            dataReturned: false,
            results: [{}]
        }
    }

    componentDidMount = () =>{
        this.getData(this.state.searchQuery);
    }

    getData = async e => {
        var url = "http://localhost:8080/getFood?query='" + this.state.searchQuery + "'";
        var returnedResults = await getFood(url);

        this.setState({
            results: returnedResults,
            dataReturned: true
        });
    }

    render(){

        if(this.state.dataReturned){

            console.log(this.state.results.success)

           return(
            <SearchResults 
            results={this.state.results.success}
            />
            ) 
        }else{
            return(
                <h1>
                    Fetching search results...
                </h1>
            )
        }
    }

}