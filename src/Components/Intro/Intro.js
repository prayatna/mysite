import React from 'react';
import {Parallax} from 'react-scroll-parallax';
import './Intro.css';
import {Col} from 'reactstrap';
import Particles from 'react-particles-js';

const intro = () => {
    return (

        <div className = "back-body">

            <div className="ban">
                <h2>Prayatna Bhattarai</h2>
                <p>...aspiring to become a full stack developer</p>
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




            {/*<Parallax*/}
            {/*offsetYMax={20}*/}
            {/*offsetYMin={-20}*/}
            {/*slowerScrollRate*/}
            {/*className="back-body">*/}
            {/*<Col style={{paddingTop: "20px", paddingBottom: "20px"}}>*/}

            {/*<div>*/}
            {/*<h1>Hello World!</h1>*/}
            {/*</div>*/}

            {/*</Col>*/}

            {/*<Parallax*/}
            {/*offsetYMax={0}*/}
            {/*offsetYMin={-20}*/}
            {/*slowerScrollRate*/}
            {/*>*/}
            {/*<Col md={{size:6, offset: 3}}  className="ban">*/}
            {/*<h5>*/}
            {/*I'm Prayatna Bhattarai currently exploring the world of*/}
            {/*ReactJS. If you like to know more about me feel free*/}
            {/*to visit my social sites. And please do check out my projects*/}
            {/*below which I developed during my uni days.*/}
            {/*</h5>*/}
            {/*</Col>*/}
            {/*</Parallax>*/}

            {/*</Parallax>*/}


        </div>

    );
};


export default intro