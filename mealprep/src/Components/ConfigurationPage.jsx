import React from 'react';

class ConfigPage extends React.Component {
  constructor(props){
      super(props)

      this.handleSubmit = this.props.handleSubmit.bind(this);
  }

  validate = () => {

    this.props.handleSubmit();

  }

  render(){
    return(
        <div>
        <form method="post" onSubmit={this.validate}>
            <fieldset>
                <legend>Nutritional Constraints</legend>

                <p>
                    <label>Number of meals per day:</label>
                    <input type="number" name="num_meals" id="numMeals" required={true}/>
                </p>

                <p>
                    <label>Calories per day:</label>
                    <input type="number" name="num_cals" id="calories" required={true}/>
                </p>

                <p>
                    <label>Grams of protein per day:</label>
                    <input type="number" name="num_protein" id="protein"/>
                </p>

                <p>
                    <label>Grams of carbs per day:</label>
                    <input type="number" name="num_carbs" id="carbs"/>
                </p>

                <p>
                    <label>Grams of fat per day:</label>
                    <input type="number" name="num_fat" id="fat"/>
                </p>

                <p>
                    <label>Grams of sugar per day:</label>
                    <input type="number" name="num_sugar" id="sugar"/>
                </p>

                <p>
                    <label>Grams of fiber per day:</label>
                    <input type="number" name="num_fiber" id="fiber"/>
                </p>

                <p>
                    <label>Dietary Constrains:</label><br/>
                    <input type="checkbox" name="constraints" value="vegan" id="vegan"/>Vegan<br/>
                    <input type="checkbox" name="constraints" value="vegetarian" id="vegetarian"/>Vegetarian<br/>
                </p>

                <p>
                    <input type="submit" />
                </p>
            </fieldset>
        </form>
        </div>) 
  }

}
export default ConfigPage;