import React from 'react'

import './navbar.css';

const websiteLogo = (
    <img src={require("./headlogo2.png")} alt="site logo"/>
);

class Navbar extends React.Component {
    render() {
        return(
        <nav>
            <ul className="nav_items">
            <li style={{color: 'var(--current-page)'}}>Home</li>
            <li>Projects</li>
            <li>Forums</li>
            <li>Wiki</li>
            <li>Blog</li>
            <li>Support</li>
            <li><a href="https://www.facebook.com">Log In</a></li>
            </ul>
            {websiteLogo}
            </nav>
        );
    }
}

export default Navbar;
