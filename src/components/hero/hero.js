import React from 'react';
import './hero.css';
import VizSensor from 'react-visibility-sensor';



class Hero extends React.Component {
    state = {
        divViz: false
    }
    render() {
        return (
            <div>
                <div className="container-fluid" id="hero">
                    <VizSensor
                        partialVisibility
                        minTopValue={100}
                        onChange={(isVisible) => {
                            this.setState({divViz: isVisible})
                    }}>
                        <div id="hero-text" style={{
                            transform: this.state.divViz ? 'translate(-50%,-50%)' : 'translate(-50%,-40%)',
                            opacity: this.state.divViz ? 1 : 0,
                            transition: 'opacity .6s .5s ease-out, transform .7s .5s ease-out'
                        }}>
                            <h1>Software Engineer</h1>
                        </div>
                    </VizSensor>
                </div>
            </div>
        )
    }
}

export default Hero;