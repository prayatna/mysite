import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Containers/App';
import 'bootstrap/dist/css/bootstrap.css';
import { ParallaxProvider } from 'react-scroll-parallax';

ReactDOM.render(
    <ParallaxProvider><App /> </ParallaxProvider>
    , document.getElementById('root'));
