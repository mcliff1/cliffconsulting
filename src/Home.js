import React, { Component } from 'react';


class Home extends Component {
  render() {
    return (


          <div className="container-fluid">

          <div className="h3">
          About Me
          </div>

          <p>
          Hi, my name is Matt Cliff, I live in Denver with my wife and two primary school aged kids.  We enjoy hiking, camping, skiing, and cooking.
          </p>

          <p>
          Top Reasons to hire Matt include
          </p>
          <ul>
          <li>Math Foundation and Continual Learning - having completed a MS in Mathematics; taught calculus in graduate school; work with stochastic PDE and numerical analysis; abstract thinker. Foundation for Machine Learning and Predictive modeling with understanding the statistics and linear algebra</li>

          <li>Developer/Architect - with twenty years of professional experience in software development having worked a in development, architecture and PM roles on projects utilizing both traditional and agile approaches. Matt has a solid understanding how to to take a technology idea and get it implemented in a production system with industry standard development life-cycle management controls. Certified AWS Cloud Architect Associate</li>


          <li>Leadership/Management - in addition to ten years as Technology Manager at Wells Fargo, have been a team lead in both project and organizational settings; managed department project portfolios, coaching, budgeting, compliance and training; communicated with key business partners, customers, other technology managers and senior leadership</li>

          <li>Support/Troubleshooting - able to combine these skill sets together to support critical production issues;  having an ability to abstract the parts of the system, understand the various inputs and outputs of each component and identify which tools are available to manage/monitor those pieces has been a invaluable skill both at times when there is an emergency, and more generally learning new systems</li>
          </ul>


          <div className="h3">
          About This Site
          </div>

          <p>
          This site is running serverless on AWS cloud.  It is currently static content (about to be converted to REACT), using the <a href="http://getbootstrap.com">bootstrap</a> framework built on jQuery. The articles and projects are published here, as well as on RPub, Shiny and GitHub.  I am currently working with the <a href="http://serverless.com">Serverless Framework</a> and various Docker containers for presenting R and Python work, however free options such as GitHub and Kaggle are also great places to share data work. Docker continues to amaze me as a part of a development toolkit,
          I just located the <a href="https://hub.docker.com/r/openbridge/ob_pysh-db/">pysh-db</a> image which is a swiss-army knife of command line interface to any common Remote DB all for 400MB.
          </p>

          </div>



    );
  }
}

export default Home;
