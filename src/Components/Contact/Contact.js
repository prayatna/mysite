import React from 'react';
import {Parallax} from 'react-scroll-parallax';
import './Contact.css';

const contact = (props) =>{
    return(
        <div>
            <Parallax
                className="body-col"
                offsetYMax={50}
                offsetYMin={-50}
                slowerScrollRate
            >
                {props.children}
            </Parallax>
        </div>
    );
}

export default contact;