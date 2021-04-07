import React from 'react';

class SearchResults extends React.Component {
  constructor(props){
      super(props)

      this.handleSubmit = this.props.handleSubmit.bind(this);
  }

  validate = () => {

    this.props.handleSubmit();

  }

  render(){
    return(<h1>Search Results</h1>) 
  }

}
export default SearchResults;