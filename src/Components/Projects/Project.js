import React, {Component} from 'react';
import {Button, Modal, ModalHeader, ModalBody, ModalFooter, Col} from 'reactstrap';

class Project extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false
        };

        this.toggle = this.toggle.bind(this);
        // this.redirectToSourceCode = this.redirectToSourceCode.bind(this);
    }

    toggle() {
        this.setState({
            modal: !this.state.modal
        });
    }

    redirectToSourceCode = () =>{
        window.open(this.props.projectDetail.sourceCode, '_blank')
    };

    redirectToDemo = () =>{
        window.open(this.props.projectDetail.demo, '_blank')
    };

    render() {
        let main2 = '';
        let otherVisuals = '';
        let otherVisuals2 = '';
        let sourceCode='';
        let demo = "";
        if (this.props.projectDetail.screenshots[0]["main2"]) {
            main2 = <img className="img-thumbnail" src={this.props.projectDetail.screenshots[0]["main2"]} alt="secondary pic"/>
        }
        if(this.props.projectDetail.screenshots[0]["other_visuals2"]){
            otherVisuals2 =<img className="img-thumbnail" src={this.props.projectDetail.screenshots[0]["other_visuals2"]} alt ="other visuals1"/>
        }

        if(this.props.projectDetail.screenshots[0]["other_visuals"]){
            otherVisuals =<img className="img-thumbnail" src={this.props.projectDetail.screenshots[0]["other_visuals"]} alt="other visual"/>

        }

        if(this.props.projectDetail.sourceCode){
            sourceCode = <Button color="primary" onClick={this.redirectToSourceCode}>
                Source Code
            </Button>
        }

        if(this.props.projectDetail.demo){
            demo = <Button color="primary" onClick={this.redirectToDemo}>
                View Demo
            </Button>
        }


        return (
            <div>
                <div>

                </div>
                {sourceCode} {' '} {demo} {' '}
                <Button color="primary" onClick={this.toggle}>Read more</Button>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className} size="lg">
                    <ModalHeader toggle={this.toggle}>{this.props.projectDetail.title}</ModalHeader>
                    <ModalBody>
                        {this.props.projectDetail.more_info}
                        <br/><br/>
                        <Col md="12">
                            <img className="img-thumbnail" src={this.props.projectDetail.screenshots[0]["main"]} alt="project thumbnail"/>
                            {main2}
                        </Col>
                        {otherVisuals2}
                        {otherVisuals}

                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={this.toggle}>Do Something</Button>{' '}
                        <Button color="secondary" onClick={this.toggle}>Close</Button>
                    </ModalFooter>
                </Modal>
            </div>
        );
    }
}

export default Project;

