import React from 'react';

class ConfigPage extends React.Component {
  constructor(props){
      super(props)
  }

  validate = (data) => {
    console.log("got here")

    // this.props.handleSubmit;
  }

  render(){
    return(
        <div>
        <form method="post" onSubmit={this.validate}>
            <fieldset>
                <legend>Nutritional Constraints</legend>

                <p>
                    <label>Number of meals per day:</label>
                    <input type="number" name="num_meals"/>
                </p>

                <p>
                    <label>Calories per day:</label>
                    <input type="number" name="num_cals"/>
                </p>

                <p>
                    <label>Grams of protein per day:</label>
                    <input type="number" name="num_protein"/>
                </p>

                <p>
                    <label>Grams of carbs per day:</label>
                    <input type="number" name="num_carbs"/>
                </p>

                <p>
                    <label>Grams of fat per day:</label>
                    <input type="number" name="num_fat"/>
                </p>

                <p>
                    <label>Grams of sugar per day:</label>
                    <input type="number" name="num_sugar"/>
                </p>

                <p>
                    <label>Grams of fiber per day:</label>
                    <input type="number" name="num_fiber"/>
                </p>

                <p>
                    <label>Dietary Constrains:</label><br/>
                    <input type="checkbox" name="constraints" value="vegan"/>Vegan<br/>
                    <input type="checkbox" name="constraints" value="vegetarian"/>Vegetarian<br/>
                    <input type="checkbox" name="constraints" value="nut-allergy"/>Nut Allergy<br/>
                </p>
            </fieldset>
        </form>
        </div>) 
  }

}
export default ConfigPage;