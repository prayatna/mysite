import React from 'react';
import {Parallax} from 'react-scroll-parallax';
import './Intro.css';
import dp from '../../assets/img/dp.jpg';
import {Row, Col} from 'reactstrap';

const intro = () => {
    return (

        <div>

            <Parallax
                offsetYMax={20}
                offsetYMin={-20}
                slowerScrollRate
                className="back-body">
                <div>HI</div>
                <div className="display-image">
                    <img src={dp} alt="dp"/>
                </div>
                <Parallax
                    offsetYMax={0}
                    offsetYMin={-200}
                    slowerScrollRate>


                </Parallax>


                <Parallax
                    offsetXMax={30}
                    offsetXMin={-30}
                    slowerScrollRate
                >
TEST
                </Parallax>
            </Parallax>

        </div>

    );
}

export default intro