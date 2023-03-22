import Navigation from './Components/NavigationBar';
import Sidebar from './Components/Sidebar';
import Main from './Components/Main';
import Advertisements  from './Components/Ads';
import Copyright from './Components/Copyright.js';


import './App.css';
import './Queries.css';


function App() {

    return (
        <>
        <Navigation/>
        <section>
            <Sidebar/>
            <Main/>
            <Advertisements/>
        </section>
        <Copyright/>
        </>
    );
}

export default App;
