import React from 'react';
import FoodSearchController from '../Controllers/FoodSearchController.jsx'
import '../Stylings/MainStylings.css'

class MainPage extends React.Component{
  constructor(props){
      super(props)

      this.state = {
        renderSearchPage: false,
        searchQuery: "",
        username: this.props.username,
        constraints: this.props.constraints
      }
  }

  handleInputChange = () => {
    this.setState({
      searchQuery: this.search.value
    })
  }

  handleSearchSubmit = () => {
    this.setState({
      renderSearchPage: true
    })
  }

  render(){

    if(!this.state.renderSearchPage){
      return(
        <div>
          <form onSubmit={this.handleSearchSubmit}>
            <input
              placeholder="Look up food..."
              ref={input => this.search = input}
              onChange={this.handleInputChange}
              className="search"
            />
            <p className="search">{this.state.searchQuery}</p>
          </form>

          <div>

            <table>
              <tbody>
                <tr>
                  <th>Breakfast</th>
                  <th>Morning Snack</th>
                  <th>Lunch</th>
                  <th>Afternoon Snack</th>
                  <th>Dinner</th>
                  <th>Dessert</th>
                </tr>
                <tr>
                  <td>Scrambled Eggs</td>
                  <td>Apple</td>
                  <td>Turkey Club</td>
                  <td>Yogurt and Chia Seeds</td>
                  <td>Chop Suey</td>
                  <td>Protein Shake</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )
    }else{
      return(
        <FoodSearchController
        searchQuery={this.state.searchQuery}
        />
      )
    }

  }
}

export default MainPage; 
