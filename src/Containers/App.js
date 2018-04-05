import React, {Component} from 'react';
import './App.css';
import Intro from '../Components/Intro/Intro';
import Projects from '../Components/Projects/Projects';
import Contact from '../Components/Contact/Contact';
import {AnimatedSwitch} from 'react-router-transition';
import {BrowserRouter, Route, NavLink} from 'react-router-dom';

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div className="App">


                    <Intro/>
                    <Projects/>
                    <Contact/>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
