import  React from 'react';

import { subjectMap, } from '../data';

import data from './data.json';

class Main extends React.Component {

    handleClick = (event) => {
        alert("You've just clicked " + event.target);
    }

    handleSelection = (event) => {
        const gridItems = document.querySelectorAll('.options p'); 
        const semesterWiseSubjects = subjectMap.get(event.target.value)[0];
        for (let i = 0; i < gridItems.length; i++)
            gridItems[i].innerHTML = "Subject: " + semesterWiseSubjects[i];
    }

    semesterNames = data.allSemesters.map(item => item.name);
    subjectNames = data.allSemesters.map(item => item.subjects);

    render() {

        const semesters = this.semesterNames.map((value) => {
            const elem = {
                id: crypto.randomUUID(),
                label: value
            };
            return (
                <option key={elem.id} value={elem.label.toString()}>
                {elem.label}
                </option>
            );        
        });

        const selectSem = (
            <>
            <p>Semester:</p>
            <select onChange={this.handleSelection} id="semesters">
            {semesters}
            </select>
            </>
        )


        const subjectsGrid = this.subjectNames[0].map((item) => {
            const props = {
                id: crypto.randomUUID(),
                label: item
            };

            return (
                <div className="options" key={props.id} 
                onClick={this.handleClick}> 
                    <p>Subject: {props.label}</p>
                </div>
            );
        })

        return(
            <div id="main">
                <div className="dropdown">{selectSem}</div>
                <div className="grid-container">{subjectsGrid}</div>
            </div>
        );
    }
}

export default Main;
