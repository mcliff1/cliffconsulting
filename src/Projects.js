import React, { Component } from 'react';


class Projects extends Component {
  render() {
    return (


          <div className="container-fluid">


          <div className="h3">
          Projects
          </div>

          <p>
          </p>

          <div className="card-deck mt-4">
          <div className="card border border-info rounded">
            <div className="card-body">
             <h5 className="card-title">Data Science Specialization Capstone</h5>
             <p className="card-text">R implementation with Markov chain to predict next word. Deployed as Shiny Application</p>
             <a href="https://mcliff.shinyapps.io/qknewt/" className="card-link">Quick Key - Next Word Tool</a>
          <h6 className="card-subtitle text-muted">published 3/16/2018</h6>
            </div>
          </div>
          </div>

          <div className="card-deck mt-4">
          <div className="card border border-info rounded">
            <div className="card-body">
             <h5 className="card-title">Denver Data Exploration and Mapping</h5>
             <p className="card-text">RSources in some data from the Denver Gov site about my neighborhood</p>
             <a href="https://mcliff1.github.io/DataScienceNotes/MyNeighborhood.html" className="card-link">My Neighborhood</a>
          <h6 className="card-subtitle text-muted">draft - latest 4/03/2018</h6>
            </div>
          </div>
          </div>

          <div className="card-deck mt-4">
          <div className="card border border-info rounded">
            <div className="card-body">
             <h5 className="card-title">Signal Bot</h5>
             <p className="card-text">AWS API RESTful serverless model for Remote Sensor devices (AWS Lambda) with REACT and Google-Charts, DynamoDB, PostgreSQL, CloudFront are also incorporated.</p>
             <a href="https://github.com/mcliff1/SignalBot/" className="card-link">GitHub Repo</a>
          <h6 className="card-subtitle text-muted">published latest 5/02/2018</h6>
            </div>
          </div>
          </div>



          </div>



    );
  }
}

export default Projects;
