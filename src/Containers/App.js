import React, {Component} from 'react';
import './App.css';
import Intro from '../Components/Intro/Intro';
import Projects from '../Components/Projects/Projects';
import Contact from '../Components/Contact/Contact';

class App extends Component {
    render() {
        return (
                <div className="App">
                    <Intro/>
                    <Projects/>
                    <Contact/>
                </div>
        );
    }
}

export default App;
