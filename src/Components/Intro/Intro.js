import React from 'react';
import {Parallax} from 'react-scroll-parallax';
import './Intro.css';
import dp from '../../assets/img/dp.jpg';
import {Col} from 'reactstrap';

const intro = () => {
    return (

        <div>

            <Parallax
                offsetYMax={20}
                offsetYMin={-20}
                slowerScrollRate
                className="back-body">
                <Col style={{paddingTop: "20px"}}>
                    <div className="display-image">
                        <img src={dp} alt="dp"/>
                    </div>

                    <div>
                        <h1>Hello World!</h1>
                    </div>

                </Col>

                <Parallax
                    offsetYMax={0}
                    offsetYMin={-50}
                    slowerScrollRate
                >
                    <div>
                        <h6>
                            I'm Prayatna Bhattarai currently exploring the world of
                            ReactJS. If you like to know more about me feel free
                            to visit my social sites. And please do check out my projects
                            below which I developed during my uni days.
                        </h6>

                    </div>
                </Parallax>

            </Parallax>



        </div>

    );
};



export default intro