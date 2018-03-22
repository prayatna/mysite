import React from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import github from "@fortawesome/fontawesome-free-brands/faGithubAlt";
import insta from "@fortawesome/fontawesome-free-brands/faInstagram";
import linkedIn from "@fortawesome/fontawesome-free-brands/faLinkedin";
import downloadCv from "@fortawesome/fontawesome-free-solid/faFileAlt";

import './Banner.css';

const banner =()=>{
        return(
            <div className="ban">
                <h1>Hello World!</h1>
                <p>My name is </p>
                <h2>Prayatna Bhattarai</h2>
                <p>and I'm aspiring to become a full stack developer.</p>

                <div>
                    <a href="https://www.github.com/prayatna" rel="noopener noreferrer" target="_blank">
                        <FontAwesomeIcon icon={github} className="icons icons-github"/>
                    </a>

                    <a href="https://www.linkedin.com/in/prayatnabhattarai" rel="noopener noreferrer" target="_blank">
                        <FontAwesomeIcon icon={linkedIn}  className="icons icons-linkedin"/>
                    </a>

                    <a href="https://www.instagram.com/prayatna" rel="noopener noreferrer" target="_blank">
                        <FontAwesomeIcon icon={insta} className="icons icons-instagram"/>
                    </a>

                    <a href="https://www.linkedin.com/in/prayatnabhattarai" rel="noopener noreferrer" target="_blank">
                        <FontAwesomeIcon icon={downloadCv} className="icons icons-cv"/>
                    </a>
                </div>
            </div>
        )

}

export default banner;