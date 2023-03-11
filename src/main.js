import React from 'react';


class Main extends React.Component {
    displayAlert = () => {
        alert("You just clicked me.");
    }

    displayShadow= () => {
        // console.log("This was hovered")
    }

    removeShadow = () => {
        this.setState({isShadowOn: false});
    }

    render() {

        const elements = [0, 1, 2];

        const options_top = elements.map((elem) => {
            return (
                <div className="options" key={elem.toString()} onClick={this.displayAlert} onMouseMove={this.displayShadow} onMouseOut={this.removeShadow}>
                <p>{elem}</p>
                </div>
            )
        })

        function displayShadow() {
            this.style.boxShadow =  "-5px 5px var(--foreground)";
        }

        function removeShadow() {
            this.style.boxShadow =  "None";
        }

        function Hello() {
            let match;
            let options;
            options = document.getElementsByClassName('options');
            for (match of options) {
                match.onmousemove = displayShadow;
                match.onmouseout = removeShadow;
            }

        }

        Hello();

        return(
            <div id="main">
                <div className="dropdown">
                <p>Semester:</p>
                <select name="semesters" id="semesters">
                <option value="1">First</option>
                <option value="2">Second</option>
                <option value="3">Third</option>
                <option value="4">Fourth</option>
                <option value="5">Fifth</option>
                <option value="6">Sixth</option>
                <option value="7">Seventh</option>
                <option value="8">Eight</option>
                </select>
                </div>

                <div id="rowOne" >
                {options_top}
                </div>
                
            <div id="rowTwo">
            <div className="options">
            <p>Four</p>
            </div>
            <div className="options">
            <p>Five</p>
            </div>
            <div className="options">
            <p>Six</p>
            </div>
            </div>
            </div>
        );
    }
}



export default Main;
