import React, {Component} from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter,Col} from 'reactstrap';

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
        return (
            <div>
                <Button color="primary" onClick={this.toggle}>{this.props.buttonLabel}Read more</Button>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className} size="lg">
                    <ModalHeader toggle={this.toggle}>{this.props.projectDetail.title}</ModalHeader>
                    <ModalBody>
                        {this.props.projectDetail.more_info}
                        <br/>
                        <Col md="12">
                            <img className="img-thumbnail" src ={this.props.projectDetail.screenshots[0]["main"]}/>
                            <img className="img-thumbnail" src={this.props.projectDetail.screenshots[0]["main2"]}/>
                        </Col>

                        <img className="img-thumbnail" src ={this.props.projectDetail.screenshots[0]["other_visuals2"]}/>
                        <img className="img-thumbnail" src ={this.props.projectDetail.screenshots[0]["other_visuals"]}/>


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

