import React, { Component } from 'react';





class MyNav extends Component {
  render() {
    return (
      <div>
      <nav className="navbar navbar-expand bg-white">
      <div className="container-fluid wrap">
      <div className="navbar-header">
      <a className="navbar-brand" href="http://cliffconsulting.com/">
        <img src="images/cliffconsulting_logo.gif" />
        Matt Cliff
      </a>
      </div>

      <div className="navbar collapse">
          <ul className="nav navbar-nav">
            <li className="nav-item active">
              <a className="nav-link active" href="index.html">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="resume.html">Resume</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="projects.html">Projects</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="articles.html">Articles</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="contact.html">Contact</a>
            </li>
          </ul>

          <ul className="navbar-nav pull-right">
            <li><a href="mailto://matt@denvercliffs.com" title="matt@denvercliffs.com">
            <i className="fa fa-envelope fa-fw"></i></a></li>
            <li><a href="https://www.linkedin.com/in/matt-cliff-45a75b6/" target="_blank" title="Linked In" >
            <i className="fa fa-linkedin fa-fw"></i></a></li>
            <li><a href="https://twitter.com/themattcliff" target="_blank" title="Twitter">
            <i className="fa fa-twitter fa-fw"></i></a></li>
            <li><a href="https://github.com/mcliff1" target="_blank" title="GitHub">
            <i className="fa fa-github fa-fw"></i></a></li>
          </ul>
       </div>


      </div>
      </nav>

      </div>


    );
  }
}

export default MyNav;
