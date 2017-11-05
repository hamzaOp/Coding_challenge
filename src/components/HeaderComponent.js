import React, { Component } from 'react';
import { render } from 'react-dom';
import Scrollchor from 'react-scrollchor';

class Header extends Component {

    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top" id="mainNav">

                    <div className="container">

                        <Scrollchor to="#page-top" className="navbar-brand">Hidden Founders{this.props.facebook ?
                            (this.props.facebook.name ? ' (' + this.props.facebook.name + ')' : '') : ''}
                        </Scrollchor>

                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarResponsive">
                            {!this.props.email ? <ul className="navbar-nav ml-auto">
                                <li className="nav-item">
                                    <Scrollchor to="#login" className="nav-link">Log in</Scrollchor>
                                </li>
                                <li className="nav-item">
                                    <Scrollchor to="#signup" className="nav-link">Sign up</Scrollchor>
                                </li>
                                <li className="nav-item">
                                    <Scrollchor to="#contact" className="nav-link">Contact us</Scrollchor>
                                </li>
                            </ul> : <ul className="navbar-nav ml-auto">
                                    <li className="nav-item">
                                        <a className="nav-link" onClick={e => e.stopPropagation()} href="/logout">{'Log out ' + '(' + this.props.email + ')'}</a>
                                    </li>
                                    <li className="nav-item">
                                        <Scrollchor to="#contact" className="nav-link">Contact us</Scrollchor>
                                    </li>
                                </ul>}
                        </div>
                    </div>
                </nav>

                <header className="bg-primary text-white">
                    <div className="container text-center">
                        <h1>Coding Challenge</h1>
                        <p className="lead">A web application that enable you to export your facebook albums.</p>
                    </div>
                </header>
            </div>
        )
    }
}

export default Header;