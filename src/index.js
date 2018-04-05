import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Containers/App';
import 'bootstrap/dist/css/bootstrap.css';
import { ParallaxProvider } from 'react-scroll-parallax';
import WebFont from 'webfontloader';

WebFont.load({
    google: {
        families: ['Droid Sans', 'Droid Serif', 'Poppins', 'Cabin Sketch']
    }
});

ReactDOM.render(
        <ParallaxProvider><App /> </ParallaxProvider>
    , document.getElementById('root'));
