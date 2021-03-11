import React from 'react'

class LogInPage extends React.Component{

    constructor(props){
        super(props);

        this.handleLogIn = this.props.handleLogIn.bind(this);
    }
    
    render() { 
        return(

            <div>
        <form method="post" onSubmit={this.handleLogIn}>
            <fieldset>
                <legend>Log In</legend>

                <p>
                    <label>Username:</label>
                    <input type="textfield" name="username" id="username"/>
                </p>

                <p>
                    <label>Password:</label>
                    <input type="password" name="password" id="password"/>
                </p>

                <p>
                    <input type="submit" />
                </p>
            </fieldset>
        </form>
        </div>

        )
    }
}

export default LogInPage;