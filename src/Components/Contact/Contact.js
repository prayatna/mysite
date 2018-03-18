import React from 'react';
import {Parallax} from 'react-scroll-parallax';
import './Contact.css';
import dp from '../../assets/img/dp.jpg';


const contact = (props) =>{
    return(
        <div>
            <Parallax
                className="body-col"
                offsetYMax={50}
                offsetYMin={-50}
                slowerScrollRate
            >

                <div className="display-image">
                    <img src={dp} alt="dp"/>
                </div>

                {props.children}
            </Parallax>
        </div>
    );
}

export default contact;