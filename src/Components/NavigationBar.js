import  React from 'react';

import data from './data.json';

class Navigation extends React.Component {


    render() {

        const websiteLogo = (
            <img src={require("../logo.png")} alt="site logo"/>
        );

        const navigationBar = data.navBarItems.map((value) => {
            const elem = {
                id: crypto.randomUUID(),
                label: value
            };
            return <li key={elem.id}>{elem.label}</li>;

        });
        return(
            <nav>
                <ul className="nav_items">
                {navigationBar}
                </ul>
                {websiteLogo}
                </nav>
        );
    }
}

export default Navigation
