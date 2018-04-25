import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Containers/App';
import 'bootstrap/dist/css/bootstrap.css';
import WebFont from 'webfontloader';

WebFont.load({
    google: {
        families: ['Droid Sans', 'Droid Serif', 'Poppins', 'Cabin Sketch']
    }
});

ReactDOM.render(<App />,
    document.getElementById('root'));
