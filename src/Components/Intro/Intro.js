import React from 'react';
import {Parallax} from 'react-scroll-parallax';
import './Intro.css';
import {Col} from 'reactstrap';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import linkedIn from '@fortawesome/fontawesome-free-brands/faLinkedin';
import github from '@fortawesome/fontawesome-free-brands/faGithubAlt';
import insta from '@fortawesome/fontawesome-free-brands/faInstagram';
import downloadCv from '@fortawesome/fontawesome-free-solid/faFileAlt';

import Particles from 'react-particles-js';

const intro = () => {
    return (

        <div className="back-body">

            <Particles
                // style={{
                //     position: 'absolute',
                //     top: 0,
                //     left: 0,
                //     width: '100%',
                //     height: '100%',
                // }}

                className="temp-particle"
                params={{
                    particles: {
                        number: {
                            value: 20,
                            density: {
                                enable: true,
                                value_area: 900
                            }
                        },
                        color: {
                            value: '#9999a9'
                        },
                        shape: {
                            type: "circle",
                            polygon: {
                                nb_sides: 6
                            }
                        },
                        size: {
                            value: 3,
                            random: true,
                            anim: {
                                enable: false,
                                speed: 40,
                                size_min: 0.1,
                                sync: false
                            }
                        },
                        line_linked: {
                            distance: 150,
                            color: "#2C3943"
                        },
                        move: {
                            enable: true,
                            speed: 1,
                            direction: "none",
                            random: false,
                            straight: false,
                            out_mode: "bounce",
                            bounce: false,
                            attract: {
                                enable: false,
                                rotateX: 600,
                                rotateY: 1200
                            }
                        }
                    },
                    interactivity: {
                        detect_on: "canvas",
                        events: {
                            onhover: {
                                enable: true,
                                mode: "repulse"
                            },
                            onclick: {
                                enable: true,
                                mode: "push"
                            },
                            resize: true
                        }

                    },
                    retina_detected: true

                }}
            />
            <div className="temp-ban">
                <h1>Hello World!</h1>
                <p>My name is </p>
                <h2>Prayatna Bhattarai</h2>
                <p>and I'm aspiring to become a full stack developer.</p>
                <span>

                    <FontAwesomeIcon icon={linkedIn} className="icons icons-linkedin"/>

                </span>

                <a href="https://www.github.com/prayatna">

                    <FontAwesomeIcon icon={github}/>

                </a>

                <a href="https://www.linkedin.com/in/prayatnabhattarai">

                    <FontAwesomeIcon icon={linkedIn} className="icons icons-linkedin"/>

                </a>

                <a href="https://www.instagram.com/prayatna">

                    <FontAwesomeIcon icon={insta}/>

                </a>
                <a href="https://www.linkedin.com/in/prayatnabhattarai">

                    <FontAwesomeIcon icon={downloadCv}/>

                </a>


            </div>

        </div>

    );
};


export default intro