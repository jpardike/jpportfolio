import React from 'react';
import './footer.css';

class Footer extends React.Component{
    render() {
        return (
            <div className="container-fluid" id="footer">
                <footer className="justify-content-center text-center">
                    <h5 className="p-3 footer-text">This site was made using React</h5>
                    <a className="p-3 footer-text" href="https://github.com/jpardike/jpportfolio/tree/josh">Check out the code for this site!</a>
                </footer>
            </div>
        )
    }
}

export default Footer;