import React from "react";
import "./footer.css";

class Footer extends React.Component {
  render() {
    return (
      <div className="container-fluid" id="footer">
        <footer className="justify-content-center text-center">
          <h5 className="p-3 footer-text">Check out the code for this site!</h5>
          <a
            className="p-3 footer-text footer-link"
            href="https://github.com/jpardike/jpportfolio/tree/josh"
          >
            <i class="fab fa-github"></i>
          </a>
        </footer>
      </div>
    );
  }
}

export default Footer;
