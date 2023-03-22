import React from 'react';

import { loadSideBar } from '../dataLoader';

class Sidebar extends React.Component {

    chapters = loadSideBar().map((item) => {
        const elem = {
            id: crypto.randomUUID(),
            label: item.chapter,
            lessons: item.lessons.map((lesson) => {
                const lessonId = crypto.randomUUID();
                return  <li key={lessonId}>{lesson.title}</li>;
            })
        };
        return (
            <React.Fragment key={elem.id}>
            <li>{elem.label}</li>
            <ul className="subtopics">{elem.lessons}</ul>
            </React.Fragment>
        )
    });

    render() {
        return(
            <div id="leftsidebar">
                <ul className="headings">{this.chapters}</ul>
            </div>
        );
    }
}

export default Sidebar;
