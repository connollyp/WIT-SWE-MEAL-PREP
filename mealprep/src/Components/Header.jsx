import React from 'react'
import GitHubLogo from '../Images/GitHub-Mark-64px.png'
import '../Stylings/HeaderStylings.css'


class Header extends React.Component{

    render() {
        return(
            <div className="headerWrapper">
                <h1>Gains Day Preppers</h1>
            </div>
        )
    }
}   

export default Header;