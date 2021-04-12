import React from 'react';
import '../Stylings/ConfigStyling.css'
class ConfigPage extends React.Component {
    constructor(props) {
        super(props)

        this.handleSubmit = this.props.handleSubmit.bind(this);
    }

    validate = () => {

        this.props.handleSubmit();

    }

    render() {
        return (
            <div className="back">
                 <div className="config-wrapper">
                <form method="post" onSubmit={this.validate}>
                    <fieldset>
                        <div className="legend">
                        <legend>User Information</legend>
                        </div>
                        <p>
                            <label>First Name</label>
                            <input type="string" placeholder="First Name" name="First_Name" id="First_Name" required={true} />   
                        </p>
                        <p>
                            <label>Last Name</label>
                            <input type="string" placeholder="Last Name" name="Last_Name" id="Last_Name" required={true} />
                        </p>
                        <p>
                            <label>Age</label>
                            <input type="number" placeholder="Age" name="Age" id="Age" />
                        </p>
                        <p>
                            <label>Weight</label>
                            <input type="number" placeholder="Lbs" name="Weight" id="Weight" />
                        </p>
                        <p>
                            <label>Height</label>
                            <input type="number" placeholder="Inches" name="Height" id="Height" />
                        </p>
                    </fieldset>


                    <fieldset>
                    <div className="legend">
                        <legend>Nutritional Constraints</legend>
                    </div>
                        <p>
                            <label>Number of meals per day:</label>
                            <input type="number" placeholder="Meals" name="num_meals" id="numMeals" required={true} />
                        </p>

                        <p>
                            <label>Calories per day:</label>
                            <input type="number" placeholder="Calories" name="num_cals" id="calories" required={true} />
                        </p>

                        <p>
                            <label>Grams of protein per day:</label>
                            <input type="number" placeholder="Protein" name="num_protein" id="protein" />
                        </p>

                        <p>
                            <label>Grams of carbs per day:</label>
                            <input type="number" placeholder="Carbs" name="num_carbs" id="carbs" />
                        </p>

                        <p>
                            <label>Grams of fat per day:</label>
                            <input type="number" placeholder="Fat" name="num_fat" id="fat" />
                        </p>

                        <p>
                            <label>Grams of sugar per day:</label>
                            <input type="number" placeholder="Sugar" name="num_sugar" id="sugar" />
                        </p>

                        <p>
                            <label>Grams of fiber per day:</label>
                            <input type="number"placeholder="Fiber" name="num_fiber" id="fiber" />
                        </p>
                        <fieldset>
                        <p>
                            <label>Dietary Constrains:</label><br />
                            
                            <input class="switch" id="yes-no" type="checkbox" name="constraints" value="vegan" id="vegan" />Vegan<br />       
                            <input class="switch" type="checkbox" name="constraints" value="vegetarian" id="vegetarian" />Vegetarian<br />
                        </p>
                        </fieldset>
                        <section className="actions">
                        <div className="submit-button">
                            <button type="submit" className="submit-btn">Submit</button>
                        </div>
                        </section>

                    </fieldset>
                </form>
                </div>
            </div>)
    }

}
export default ConfigPage;