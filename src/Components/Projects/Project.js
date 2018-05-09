import React, {Component} from 'react';
import {Button, Modal, ModalHeader, ModalBody, ModalFooter, Col} from 'reactstrap';

class Project extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false
        };

        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState({
            modal: !this.state.modal
        });
    }

    render() {
        let main2 = '';
        let otherVisuals = '';
        let otherVisuals2 = '';
        if (this.props.projectDetail.screenshots[0]["main2"]) {
            main2 = <img className="img-thumbnail" src={this.props.projectDetail.screenshots[0]["main2"]}/>
        }
        if(this.props.projectDetail.screenshots[0]["other_visuals2"]){
            otherVisuals2 =<img className="img-thumbnail" src={this.props.projectDetail.screenshots[0]["other_visuals2"]}/>
        }

        if(this.props.projectDetail.screenshots[0]["other_visuals"]){
            otherVisuals =<img className="img-thumbnail" src={this.props.projectDetail.screenshots[0]["other_visuals"]}/>

        }

        return (
            <div>
                <Button color="primary" onClick={this.toggle}>{this.props.buttonLabel}Read more</Button>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className} size="lg">
                    <ModalHeader toggle={this.toggle}>{this.props.projectDetail.title}</ModalHeader>
                    <ModalBody>
                        {this.props.projectDetail.more_info}
                        <br/><br/>
                        <Col md="12">
                            <img className="img-thumbnail" src={this.props.projectDetail.screenshots[0]["main"]}/>
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

