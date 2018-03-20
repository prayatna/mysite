import React from 'react';
import './Intro.css';
import Particles from 'react-particles-js';
import Banner from './Banner';

const intro = () => {
    return (

        <div className="back-body">

            <Particles
                className="background-particle"
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

            <Banner/>

        </div>

    );
};


export default intro