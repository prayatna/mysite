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
                    offsetYMin={-200}
                    slowerScrollRate
                >

                    asdadasdasd asdasdas
                </Parallax>

            </Parallax>

        </div>

    );
}

export default intro