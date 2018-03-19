import React from 'react';
import {Parallax} from 'react-scroll-parallax';
import './Intro.css';
import {Col} from 'reactstrap';
import Particles from 'react-particles-js';

const intro = () => {
    return (

        <div className = "back-body">

            <div className="ban">
                <h1>Hello World!</h1>
                <p>My name is </p>
                <h2>Prayatna Bhattarai</h2>
                <p>and I'm aspiring to become a full stack developer.</p>
            </div>
            <Particles

                params={{
                    particles: {
                        number: {
                            value: 100,
                            density:{
                                enable: false,
                                value_area: 500
                            }
                        },
                        color:{
                            value: '#9999a9'
                        },
                        shape:{
                          type: "circle",
                          polygon:{
                              nb_sides: 6
                          }
                        },
                        size:{
                            value: 3,
                            random: true,
                            anim:{
                                enable: false,
                                speed: 40,
                                size_min:0.1,
                                sync: false
                            }
                        },
                        line_linked: {
                            distance: 150,
                            color:"#2C3943"
                        },
                        move:{
                            enable: true,
                            speed: 1,
                            direction: "none",
                            random: false,
                            straight: false,
                            out_mode: "bounce",
                            bounce: false,
                            attract:{
                                enable: false,
                                rotateX:600,
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


        </div>

    );
};


export default intro