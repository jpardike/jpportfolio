import React from 'react';
import './projects.css';
import VizSensor from 'react-visibility-sensor';

var imageOne = require(`./Screenshot_2020-01-27 Josh's Guitars.png`);
var imageTwo = require(`./Screenshot_2020-01-27 https jpardike github io.png`)

class Projects extends React.Component {
    state = {
        divViz: false
    }
    render() {
        return (
            
            <div className="container-fluid" id="projects">
                <div className="row justify-content-center text-center p-5">
                    <div className="col justify-content-center">
                        <div className="row justify-content-center">
                            <h1 className="project-text" id="projects">Projects</h1>
                        </div>
                        <VizSensor
                            partialVisibility
                            minTopValue={100}
                            onChange={(isVisible) => {
                            this.setState({divViz: isVisible})
                        }}>
                         <div className="row justify-content-around p-4">
                            <div className="col-lg-6 p-4">
                                <div className="card border-0 shadow-lg" id="project-card" style={{
                                    transform: this.state.divViz ? 'translate(0%,0%)' : 'translate(0%,10%)',
                                    opacity: this.state.divViz ? 1 : 0,
                                    transition: 'opacity .6s .5s ease-out, transform .7s .5s ease-out'
                                }}>
                                    <img src={imageOne} className="card-img-top img-fluid" id="card-image" alt="" />
                                    <div className="card-body text-center p-5" id="card-color">
                                        <h5 className="card-title p-4 card-text">Guitar Business Page</h5>
                                            <p className="card-text p-4 card-text">A multi page website showcasing a business that makes and sells guitars.</p>
                                            <h6 className="p-4 card-text"><i className="fab fa-bootstrap px-2"></i><i className="fab fa-html5 px-2"></i><i className="fab fa-css3-alt px-2"></i></h6>
                                            <a href="https://jpardike.github.io/Product_page/" className="card-link">Visit Website</a>
                                            <a href="https://github.com/jpardike/Product_page" className="card-link">Visit Github</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 p-4">
                                <div className="card border-0 shadow-lg" id="project-card" style={{
                                        transform: this.state.divViz ? 'translate(0%,0%)' : 'translate(0%,10%)',
                                        opacity: this.state.divViz ? 1 : 0,
                                        transition: 'opacity .6s .5s ease-out, transform .7s .5s ease-out'
                                    }}>
                                    <img src={imageTwo} className="card-img-top img-fluid" id="card-image" alt="" />
                                    <div className="card-body text-center p-5" id="card-color">
                                        <h5 className="card-title p-4 card-text">Survey Form</h5>
                                            <p className="card-text p-4 card-text">A single page survey form for someone that had purchased a guitar.</p>
                                            <h6 className="p-4 card-text"><i className="fab fa-bootstrap px-2"></i><i className="fab fa-html5 px-2"></i><i className="fab fa-css3-alt px-2"></i></h6>
                                            <a href="https://jpardike.github.io/Survey_form/" className="card-link">Visit Website</a>
                                            <a href="https://github.com/jpardike/Survey_form" className="card-link">Visit Github</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </VizSensor>
                    </div>
                </div>
            </div>
        )
    }
}

export default Projects;
