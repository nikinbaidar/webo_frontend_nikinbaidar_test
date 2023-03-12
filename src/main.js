import React from 'react';


class Main extends React.Component {

    handleClick = (event) => {
        const element = event.target
        alert("You just clicked " + element)
    }

    displayShadow = (event) => {
        const element = event.target;

        if (element.classList.contains('options')) {
            element.style.boxShadow = "-5px 5px var(--foreground)";
            element.style.transform = "translate(8px, -8px)";
        }
        else {
            element.parentNode.style.boxShadow = "-5px 5px var(--foreground)";
            element.parentNode.style.transform = "translate(8px, -8px)";
        }
    }

    removeShadow = (event) => {
        const element = event.target;

        if (element.classList.contains('options')) {
            element.style.boxShadow =  "None";
            element.style.transform = "translate(0)";
        }
        else {
            element.parentNode.style.boxShadow = "None";
            element.parentNode.style.transform = "translate(0)";
        }
    }

    render() {

        const semesters = ["First", "Second", "Third", "Fourth", "Fifth",
            "Sixth", "Seventh", "Eighth"];

        const subjects = [0, 1, 2, 3, 4, 5];

        const semester_list = semesters.map((elem) => {
            return <option key={elem} value={elem.toString()}>{elem}</option>;
        })

        const sem_options = (
            <>
            <p>Semester:</p>
            <select id="semesters">{semester_list}</select>
            </>
        )

        const subjects_grid = subjects.map((elem) => {
            return (
                <div className="options" key={elem.toString()} 
                onClick={this.handleClick} 
                onMouseMove={this.displayShadow} 
                onMouseOut={this.removeShadow}>
                    <p>{elem}</p>
                </div>
            );
        })


        return(
            <div id="main">
                <div className="dropdown">{sem_options}</div>
                <div className="grid-container">{subjects_grid}</div>
            </div>
        );
    }
}



export default Main;
