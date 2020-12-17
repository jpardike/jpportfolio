import React from 'react';
import './contact.css';
import VizSensor from 'react-visibility-sensor';

class Contact extends React.Component {
    state = {
        divViz: false
    }
    render() {
        return (
            <VizSensor
            partialVisibility
            minTopValue={100}
            onChange={(isVisible) => {
                this.setState({divViz: isVisible})
            }}>
            <div className="container-fluid p-5" id="contact">
                <div className="row justify-content-center">
                    <h1 className="contact">Contact</h1>
                </div>
                <div className="row justify-content-center py-4" style={{
                        transform: this.state.divViz ? 'translate(0%,0%)' : 'translate(0%,40%)',
                        opacity: this.state.divViz ? 1 : 0,
                        transition: 'opacity .6s .5s ease-out, transform .7s .5s ease-out'
                    }}>
                    <i className="far fa-envelope px-2 contact-text"> :</i>
                    <p className="contact-text">jpardike@gmail.com</p>
                </div>
                <div className="row justify-content-center pt-4 pb-4" style={{
                        transform: this.state.divViz ? 'translate(0%,0%)' : 'translate(0%,40%)',
                        opacity: this.state.divViz ? 1 : 0,
                        transition: 'opacity .6s 1s ease-out, transform .7s 1s ease-out'
                    }}>
                    <i className="fas fa-mobile-alt px-2 contact-text"> :</i>
                    <p className="contact-text">(402)641-7235</p>
                </div>
            </div>
            </VizSensor>
        )
    }
}

export default Contact;