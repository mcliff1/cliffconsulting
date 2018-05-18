import React, { Component, Section } from 'react';

/* Expects
 * title
 * text
 * link_name
 * link_url
 * published
 */
const project_list = [
  {
    'title' : 'Data Science Specialization Capstone',
    'href': 'https://mcliff.shinyapps.io/qknewt/',
    'link_name': 'Quick Key - Next Word Tool',
    'description': 'R implementation with Markov chain to predict next word. Deployed as Shiny Application',
    'tagline': 'publshed 3/16/2018'
  },
  {
    'title' : 'Denver Data Exploration and Mapping',
    'href': 'https://mcliff1.github.io/DataScienceNotes/MyNeighborhood.html',
    'link_name': 'My Neighborhood',
    'description': 'RSources in some data from the Denver Gov site about my neighborhood',
    'tagline': 'updated 4/03/2018'
  },
  {
    'title' : 'Signal Bot',
    'href': 'https://github.com/mcliff1/SignalBot/',
    'link_name': 'GitHub Repo',
    'description': 'AWS API RESTful serverless model for Remote Sensor devices (AWS Lambda) with REACT and Google-Charts, DynamoDB, PostgreSQL, CloudFront are also incorporated.',
    'tagline': 'updated 5/02/2018'
  }
]

class ProjectItem extends Component {
  //let proj = this.props.proj
  render() {
    return(
      <div className="card-deck mt4">
      <div className="card border border-info rounded">
        <div className="card-body">
        <h5 className="card-title">{ this.props.proj.title }</h5>
        <p className="card-text">{ this.props.proj.description }</p>
        <a href="{ proj.href }" className="card-link">{ this.props.proj.link_name }</a>
        <h6 className="card-subtitle text-muted">published { this.props.proj.published }</h6>
        </div>
      </div>
      </div>
    );
  }
}



class Projects extends Component {
  render() {
    return (


          <div className="container-fluid">


          <div className="h3">
          Projects
          </div>

          <p>
          </p>

          <section>
          { project_list.map( (proj, idx) => {
            return(
              <div>
              <ProjectItem proj={proj} key={idx} />
              <p/>
              </div>
            )
          })}
          </section>




          </div>



    );
  }
}

export default Projects;
export { ProjectItem };
