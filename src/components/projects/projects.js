import React from "react";
import "./projects.css";
import VizSensor from "react-visibility-sensor";

var imageOne = require(`./josh-guitars.png`);
var imageTwo = require(`./survey-form.png`);
var imageThree = require(`./dryft.png`);
var imageFour = require(`./tianguis.png`);
var imageFive = require(`./toma.png`);
var imageSix = require(`./dilectio.png`);

class Projects extends React.Component {
  state = {
    divViz: false,
  };
  render() {
    return (
      <div className="container-fluid" id="projects">
        <div className="row justify-content-center text-center p-5">
          <div className="col justify-content-center">
            <div className="row justify-content-center">
              <h1 className="project-text" id="projects">
                Projects
              </h1>
            </div>
            <VizSensor
              partialVisibility
              minTopValue={100}
              onChange={(isVisible) => {
                this.setState({ divViz: isVisible });
              }}
            >
              <div className="row justify-content-around p-4">
                <div className="col-lg-6 p-4">
                  {/* Dilectio Design Card */}
                  <div
                    className="card border-0 shadow-lg mb-4"
                    id="project-card"
                    style={{
                      transform: this.state.divViz
                        ? "translate(0%,0%)"
                        : "translate(0%,10%)",
                      opacity: this.state.divViz ? 1 : 0,
                      transition:
                        "opacity .6s .5s ease-out, transform .7s .5s ease-out",
                    }}
                  >
                    <img
                      src={imageSix}
                      className="card-img-top img-fluid"
                      id="card-image"
                      alt=""
                    />
                    <div className="card-body text-center p-5" id="card-color">
                      <h5 className="card-title p-4 card-text">
                        Dilectio Design
                      </h5>
                      <p className="card-text p-4 card-text">
                        A design company's portfolio site.
                      </p>
                      <h6 className="p-4 card-text">
                        <i class="fab fa-react px-2"></i>
                        <i className="fab fa-bootstrap px-2"></i>
                      </h6>
                      <a
                        href="https://github.com/jpardike/melissadeldes"
                        className="card-link"
                      >
                        Visit Github
                      </a>
                    </div>
                  </div>
                  {/* Tianguis Card */}
                  <div
                    className="card border-0 shadow-lg mb-4"
                    id="project-card"
                    style={{
                      transform: this.state.divViz
                        ? "translate(0%,0%)"
                        : "translate(0%,10%)",
                      opacity: this.state.divViz ? 1 : 0,
                      transition:
                        "opacity .6s .5s ease-out, transform .7s .5s ease-out",
                    }}
                  >
                    <img
                      src={imageFour}
                      className="card-img-top img-fluid"
                      id="card-image"
                      alt=""
                    />
                    <div className="card-body text-center p-5" id="card-color">
                      <h5 className="card-title p-4 card-text">Tianguis</h5>
                      <p className="card-text p-4 card-text">
                        A site for posting classifieds.
                      </p>
                      <h6 className="p-4 card-text">
                        <i className="fab fa-bootstrap px-2"></i>
                        <i className="fab fa-css3-alt px-2"></i>
                      </h6>
                      <a
                        href="https://jp-tianguis.herokuapp.com/"
                        className="card-link"
                      >
                        Visit Website
                      </a>
                      <a
                        href="https://github.com/jpardike/project-one"
                        className="card-link"
                      >
                        Visit Github
                      </a>
                    </div>
                  </div>
                  {/* Josh's Guitars Card */}
                  <div
                    className="card border-0 shadow-lg mb-4"
                    id="project-card"
                    style={{
                      transform: this.state.divViz
                        ? "translate(0%,0%)"
                        : "translate(0%,10%)",
                      opacity: this.state.divViz ? 1 : 0,
                      transition:
                        "opacity .6s .5s ease-out, transform .7s .5s ease-out",
                    }}
                  >
                    <img
                      src={imageOne}
                      className="card-img-top img-fluid"
                      id="card-image"
                      alt=""
                    />
                    <div className="card-body text-center p-5" id="card-color">
                      <h5 className="card-title p-4 card-text">
                        Guitar Business Page
                      </h5>
                      <p className="card-text p-4 card-text">
                        A multi page website showcasing a business that makes
                        and sells guitars.
                      </p>
                      <h6 className="p-4 card-text">
                        <i className="fab fa-bootstrap px-2"></i>
                        <i className="fab fa-html5 px-2"></i>
                        <i className="fab fa-css3-alt px-2"></i>
                      </h6>
                      <a
                        href="https://jpardike.github.io/Product_page/"
                        className="card-link"
                      >
                        Visit Website
                      </a>
                      <a
                        href="https://github.com/jpardike/Product_page"
                        className="card-link"
                      >
                        Visit Github
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 p-4">
                  {/* Dryft Card */}
                  <div
                    className="card border-0 shadow-lg mb-4"
                    id="project-card"
                    style={{
                      transform: this.state.divViz
                        ? "translate(0%,0%)"
                        : "translate(0%,10%)",
                      opacity: this.state.divViz ? 1 : 0,
                      transition:
                        "opacity .6s .5s ease-out, transform .7s .5s ease-out",
                    }}
                  >
                    <img
                      src={imageThree}
                      className="card-img-top img-fluid"
                      id="card-image"
                      alt=""
                    />
                    <div className="card-body text-center p-5" id="card-color">
                      <h5 className="card-title p-4 card-text">Dryft</h5>
                      <p className="card-text p-4 card-text">
                        A travel blogging and social site dedicated to those who
                        are always on the move.
                      </p>
                      <h6 className="p-4 card-text">
                        <i class="fab fa-python px-2"></i>
                      </h6>
                      <a
                        href="https://dryft.herokuapp.com/"
                        className="card-link"
                      >
                        Visit Website
                      </a>
                      <a
                        href="https://github.com/jpardike/project-2-1020"
                        className="card-link"
                      >
                        Visit Github
                      </a>
                    </div>
                  </div>
                  {/* Toma Card */}
                  <div
                    className="card border-0 shadow-lg mb-4"
                    id="project-card"
                    style={{
                      transform: this.state.divViz
                        ? "translate(0%,0%)"
                        : "translate(0%,10%)",
                      opacity: this.state.divViz ? 1 : 0,
                      transition:
                        "opacity .6s .5s ease-out, transform .7s .5s ease-out",
                    }}
                  >
                    <img
                      src={imageFive}
                      className="card-img-top img-fluid"
                      id="card-image"
                      alt=""
                    />
                    <div className="card-body text-center p-5" id="card-color">
                      <h5 className="card-title p-4 card-text">Toma</h5>
                      <p className="card-text p-4 card-text">
                        A Tamagotchi like game.
                      </p>
                      <h6 className="p-4 card-text">
                        <i className="fab fa-html5 px-2"></i>
                        <i className="fab fa-css3-alt px-2"></i>
                      </h6>
                      <a
                        href="https://jpardike.github.io/Toma/"
                        className="card-link"
                      >
                        Visit Website
                      </a>
                      <a
                        href="https://github.com/jpardike/Toma"
                        className="card-link"
                      >
                        Visit Github
                      </a>
                    </div>
                  </div>
                  {/* Survey Form Card */}
                  <div
                    className="card border-0 shadow-lg mb-4"
                    id="project-card"
                    style={{
                      transform: this.state.divViz
                        ? "translate(0%,0%)"
                        : "translate(0%,10%)",
                      opacity: this.state.divViz ? 1 : 0,
                      transition:
                        "opacity .6s .5s ease-out, transform .7s .5s ease-out",
                    }}
                  >
                    <img
                      src={imageTwo}
                      className="card-img-top img-fluid"
                      id="card-image"
                      alt=""
                    />
                    <div className="card-body text-center p-5" id="card-color">
                      <h5 className="card-title p-4 card-text">Survey Form</h5>
                      <p className="card-text p-4 card-text">
                        A single page survey form for someone that had purchased
                        a guitar.
                      </p>
                      <h6 className="p-4 card-text">
                        <i className="fab fa-bootstrap px-2"></i>
                        <i className="fab fa-html5 px-2"></i>
                        <i className="fab fa-css3-alt px-2"></i>
                      </h6>
                      <a
                        href="https://jpardike.github.io/Survey_form/"
                        className="card-link"
                      >
                        Visit Website
                      </a>
                      <a
                        href="https://github.com/jpardike/Survey_form"
                        className="card-link"
                      >
                        Visit Github
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </VizSensor>
          </div>
        </div>
      </div>
    );
  }
}

export default Projects;
