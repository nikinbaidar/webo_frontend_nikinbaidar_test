import Navbar from './navbar.js';
import Ads    from './advertisements.js';
import Main from './main.js';

import './testing.css';


function Sidebar() {
    return(
        <>
        <div id="leftsidebar">
        <ul className="headings">
        <li>Item number one</li>
        <ul className="subtopics">
        <li>Sub Item 1</li>
        <li>Sub Item 2</li>
        </ul>
        <li>How To</li>
        <ul className="subtopics">
        <li>Arduino</li>
        <li>ESP32</li>
        <li>Raspberry Pi</li>
        </ul>
        <li>Nerding Out</li>
        <ul className="subtopics">
        <li>Beizer Curves</li>
        </ul>
        </ul>
        </div>
        </>
    );
}

function App() {

    document.title = "Home - Notesstuidio";

    return (
        <>
        <Navbar />
        <section>
            <Sidebar/>
            <Main/>
            <Ads/>
        </section>
        </>
    );
}

export default App;
