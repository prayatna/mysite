import React, {Component} from 'react';
import './Projects.css';
import Project from './Project';
import ProjectsDetail from '../../Containers/ProjectsDetail';
import {VerticalTimeline, VerticalTimelineElement} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import IconBootstrap from 'react-devicon/bootstrap/plain'


class Projects extends Component {

// TODO: render offset programmatically
    render() {
        return (
            <div className="body-color">
                <div>
                    Projects <div><IconBootstrap width={100} height={100}/></div>
                        <VerticalTimeline>
                            {ProjectsDetail.projects.map(project => (
                                <VerticalTimelineElement
                                    key={project.id}
                                    iconStyle={{background: 'rgb(33, 150, 243)', color: '#fff'}}
                                >
                                    <h4 className="vertical-timeline-element-title">{project.title}</h4>
                                    <p>
                                        {project.description}
                                    </p>
                                    <div><Project projectDetail={project}/></div>
                                </VerticalTimelineElement>
                            ))}
                        </VerticalTimeline>
                    </div>
            </div>
        );
    }
}

export default Projects;



