import React from 'react';
import '../Stylings/LoginStyling.css'


class LogInPage extends React.Component{
  constructor(props){
      super(props)

      this.state = {
        hasAccount: true
      }

      this.handleSubmit = this.props.handleSubmit.bind(this);
      this.setUserName = this.props.setUserName.bind(this);
      this.setPassword = this.props.setPassword.bind(this);
      this.setAccountStatus = this.props.setAccountStatus.bind(this);
  }

  render(){
    return(
      <div className="modal">
        <div className="login-wrapper">
        <h1>Please Log In</h1>
        <form onSubmit={this.handleSubmit}>
          <label>
            <p>Username:</p>
            <input type="text" onChange={e => this.setUserName(e.target.value)} />
          </label>
          <label>
            <p>Password:</p>
            <input type="password" onChange={e => this.setPassword(e.target.value)} />
          </label>
          <div>
            <button type="submit" className="submit-btn">Submit</button>
          </div>
          <div>
            <p>Need an account? <button className="btn info" onClick={() => { this.setAccountStatus(false) }}>Click Here</button></p>
          </div>
        </form>
      </div>
      </div>
    )
  }
}

export default LogInPage; 
