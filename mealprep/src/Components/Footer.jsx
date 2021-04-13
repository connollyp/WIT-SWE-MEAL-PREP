import React from 'react'
import GitHubLogo from '../Images/GitHub-Mark-64px.png'
import '../Stylings/FooterStylings.css'


class Footer extends React.Component{

    render() {
        return(
            <div className="footerWrapper">
                <div className="socialMediaWrapper">
                    <h5>Check out the repo!</h5>
                    <a href="https://github.com/connollyp/WIT-SWE-MEAL-PREP" className="imageLinks">
                        <img alt="github logo" src={GitHubLogo} className="imageLinks" />
                    </a>
                </div>
                <div className="memberWrapper">
                    <h4>Patrick</h4> 
                    <a href="https://github.com/connollyp/" className="imageLinks">
                        <img alt="github logo" src={GitHubLogo} className="imageLinks" />
                    </a>
                    <a href="https://github.com/connollyp/" className="imageLinks">
                        <img alt="github logo" src={GitHubLogo} className="imageLinks" />
                    </a>
                </div>
            </div>
        )
    }
}   

export default Footer;