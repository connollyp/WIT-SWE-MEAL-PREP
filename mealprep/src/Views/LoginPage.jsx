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
        <h1>Log In</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="field">
            <label>
              <p>Username:</p>
            </label>
            <input type="text" onChange={e => this.setUserName(e.target.value)} />
          </div>
          <div className="field">
            <label>
              <p>Password:</p>
            </label>
            <input type="password" onChange={e => this.setPassword(e.target.value)} />
          </div>
          <section className="actions">
            <div className="submit-button">
              <button type="submit" className="submit-btn">Submit</button>
            </div>
            <div className="links">
              <p>Need an account? <button className="accountButton" onClick={() => { this.setAccountStatus(false) }}> Click Here</button></p>
            </div>
          </section>
        </form>
      </div>
      </div>
    )
  }
}

export default LogInPage; 
