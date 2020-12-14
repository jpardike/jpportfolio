import React from 'react';
import './about.css';
import VizSensor from 'react-visibility-sensor';

var imageThree = require(`./20171209_172208_85.jpg`);

class About extends React.Component{
    state = {
        divViz: false
    }
    render() {
        return (
            <div className="container-fluid p-3" id="about-me">
                <div className="row justify-content-center p-5">
                    <h1 className="text-center about-text">About Me</h1>
                </div>
                <div className="row justify-content-center">
                    <div className="col-md-4">
                        <img className="img-fluid rounded-circle" src={imageThree} alt="me" />
                    </div>
                </div>
                <div className="row justify-content-center text-center">
                    <VizSensor
                        partialVisibility
                        minTopValue={100}
                        onChange={(isVisible) => {
                            this.setState({divViz: isVisible})
                    }}>
                    <div className="col-md-5">
                        <h3  className="py-4 about-text" style={{
                        transform: this.state.divViz ? 'translate(0%,0%)' : 'translate(0%,10%)',
                        opacity: this.state.divViz ? 1 : 0,
                        transition: 'opacity .6s .5s ease-out, transform .7s .5s ease-out'
                    }}>Education and Experience</h3>
                        <p className="pt-4 pb-5 about-text" style={{
                        transform: this.state.divViz ? 'translate(0%,0%)' : 'translate(0%,10%)',
                        opacity: this.state.divViz ? 1 : 0,
                        transition: 'opacity .6s 1s ease-out, transform .7s 1s ease-out'
                    }}>Hi! My Name is Joshua Pardike and I am a front-end developer in Seattle, Washington. I started my journey as a web developer in 2018. I am self-taught and I continue to learn new things every day. Some of the source material that I use comes from Codecadamy, Free Code Camp, W3Schools, Gymnasium, a few books, and various documentation sites. I work with HTML5, CSS3, JavaScript, Bootstrap, ReactJS, Node.JS, NPM, Git, and GitHub. I enjoy making websites and I hope I can be a part of your team.</p>
                    </div>
                    </VizSensor>
                </div>
            </div>
            
        )
    }
}

export default About;