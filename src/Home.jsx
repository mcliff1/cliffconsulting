//import React, { Component } from 'react';
import React from 'react';

const Home = () => {
    return (
          <div className="container-fluid">
          <div className="h3">
          About Matt
          </div>

          <p>
          Hello and welcome to Matt Cliff&apos;s website!
          </p>

          <p>
          Matt is an experienced IT professional based in Denver, Colorado, with an impressive 30-year career in the field.
          Currently, he brings his expertise to contract and freelance work, specializing in Python and AWS Cloud.
          With a strong background in software development, architecture, and project management, Matt is well-equipped to tackle various technology challenges.
          Explore this website to learn more about his skills and accomplishments!
          </p>

          <ul>
          <li><b>Developer/Architect</b> With twenty years of professional experience in software development, Matt has worked in various roles, including development, architecture, and project management. He has expertise in both traditional and agile approaches and possesses a solid understanding of implementing technology ideas into production systems with industry-standard development life-cycle management controls. Matt is also a certified AWS Cloud Architect Associate.</li>

          <li><b>Math Foundation and Continual Learning</b> With a completed MS in Mathematics and experience teaching calculus in graduate school, Matt has a strong mathematical foundation. He has worked with stochastic PDE and numerical analysis, showcasing his abstract thinking abilities. Moreover, Matt has a deep understanding of statistics and linear algebra, providing a solid foundation for machine learning and predictive modeling.</li>

          <li><b>Leadership/Management</b> Matt&apos;s ten years of experience as a Technology Manager at Wells Fargo demonstrate his leadership and management capabilities. He has served as a team lead in project and organizational settings, managing department project portfolios, coaching team members, budgeting, ensuring compliance, and providing training. Matt effectively communicates with key business partners, customers, other technology managers, and senior leadership.</li>

          <li><b>Support/Troubleshooting</b> Matt combines his diverse skill sets to efficiently address critical production issues. His ability to abstract system components, understand their
inputs and outputs, and identify available tools for effective management and monitoring sets him apart. This invaluable skill has proven crucial in emergency situations and when adapting to new systems.</li>

          </ul>


          <div className="h3">
          About This Site
          </div>

          <p>

          The site is hosted using AWS CloudFront serving static content from a S3 bucket running static content using the <a href="https://reactjs.org">REACT</a> and <a href="http://getbootstrap.com">bootstrap</a> frameworks.
          The source is managed in <a href="https://github.com/mcliff1/cliffconsulting">GitHub</a> and has a cloud formation stack that can be run to create a full AWS stack for any branch, including a CI pipeline to automatically deploy.
          The articles and projects are published here, as well as on RPub, Shiny and GitHub.
          I am currently working with the <a href="http://serverless.com">Serverless Framework</a> and various Docker containers for presenting R and Python work, however free options such as GitHub and Kaggle are also great places to share data work.
	  </p>

          </div>



    );
}

export default Home;
