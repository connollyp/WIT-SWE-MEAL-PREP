import React from 'react';
import '../Stylings/AccountCreationStyling.css'


class CreateAccountPage extends React.Component{
  constructor(props){
      super(props)

      this.state = {
        hasAccount: true
      }

      this.handleSubmit = this.props.handleSubmit.bind(this);
      this.setUserName = this.props.setUserName.bind(this);
      this.setPassword = this.props.setPassword.bind(this);
      this.setEmail = this.props.setEmail.bind(this);
  }

  render(){
    return(
      <div className="modal">
        <div className="login-wrapper">
        <h1>Create an Account</h1>
        <form onSubmit={this.handleSubmit}>
          <label>
          <label>
            <p>Email:</p>
            <input type="email" onChange={e => this.setEmail(e.target.value)} />
          </label>
            <p>Username:</p>
            <input type="text" onChange={e => this.setUserName(e.target.value)} />
          </label>
          <label>
            <p>Password:</p>
            <input type="password" onChange={e => this.setPassword(e.target.value)} />
          </label>
          <div>
            <button type="submit" className="submit-btn">Cancel</button>
            <button type="submit" className="submit-btn">Submit</button>
          </div>
        </form>
      </div>
      </div>
    )
  }
}

export default CreateAccountPage; 
