import React, { Component } from 'react';
import { Collapse, Card, Button, CardBody } from 'reactstrap';


// class ResumeStrongList extends Component {
//   render() {
//     return (
//       <div>
//       <strong>title</strong>
//       <ul>
//         <li>for each element in list</li>
//       </ul>
//       </div>
//     )
//   }
// }


class ResumeSection extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = { isOpen: false };
  }

  componentDidMount() {
    this.setState({ isOpen: this.props.startOpen });
  }

  toggle() {
    this.setState({ isOpen: !this.state.isOpen });
  }

  render() {
    return (
      <div>
      <Card>

      <Button onClick={this.toggle} block outline className="text-left card-header btn-link">
      {this.props.header}</Button>

      <Collapse isOpen={this.state.isOpen}>
          <CardBody>{this.props.children}</CardBody>
      </Collapse>
      </Card>
      </div>
    );
  }
}


class Resume extends Component {
  render() {
    return (
          <div className="container-fluid">


          <div className="h3">Resume</div>
          <p><a href="/mcliff_resume_2018_09.pdf">PDF</a></p>


          <ResumeSection header="Objective" startOpen={true}>
          Seeking role in cloud architecture/development with interest in data science. Over twenty years of software development experience including ten years in technology leadership. A foundation in mathematics and computer science has supported a continual learning and a passion for machine learning and predictive modeling.
          </ResumeSection>






          <ResumeSection header="Skills and Abilities" startOpen={true}>
          <strong>DATA SCIENCE FOUNDATION AND CONTINUAL LEARNER</strong>
         <ul>
           <li>Familiar with R including tidy, knitr, ggplot2, dplyr, caret</li>
           <li>Familiar with key Python ML libraries: sklearn, pandas, numpy, matplotlib, nltk</li>
           <li>Understanding of Decision Trees, Neural Net, Boosting, SVN, k-Nearest Neighbor, Clustering</li>
           <li>Familiar with regression and numerical analysis methods</li>
           <li>Numerical PDE and Stochastic methods post-master degree at Los Alamos National Lab</li>
           <li>Taught Calculus I/II classes for 2 years at University of Memphis as a graduate student</li>
           <li>Experience with MATLAB, Maple, and Mathematica</li>
         </ul>


         <strong>DEVELOPER / ARCHITECTURE</strong>
         <ul>
           <li>Full SDLC Experience; Waterfall/Agile methodologies; RUP, GitHub, Maven, SVN,  Ant</li>
           <li>Certified AWS Solution Architect – Associate; familiar with EC2, VPC, EMR, Lambda, CloudFormation</li>
           <li>Proficient with UNIX/Linux; Linux user since 1995; system administration experience</li>
           <li>Familiar with programming languages: Java, Python, R, Perl, Bash script, C#, C/C++</li>
           <li>Over 10 years Team Lead/OO Design experience with SOA designs</li>
           <li>Familiar with Apache Frameworks – HTTPD, Tomcat, Hadoop, Maven, Hive, Pig, Spark, Mahout</li>
           <li>Familiar with Microservices Architecture; API Design, REST, AWS Lambda/API Gateway, Docker, Kubernetes</li>
           <li>Database Design - RDBMS: Oracle, SQL Server, PostgreSQL, MySQL; and NoSQL: DynamoDB, MongoDB</li>
         </ul>


         <strong>TEAMWORK AND COMMUNICATION</strong>
         <ul>
           <li>Accountable owner of  multiple business-critical applications over 10 years</li>
           <li>Managed Department Budgets, Staffing Plans, Department forecasts</li>
           <li>Facilitated Team meetings, Team member recognition and talent management</li>
           <li>Communication; working with senior management and product owners</li>
           <li>Staff and Non-employee staff management, across the US and in India (hired over 50 contractors)</li>
         </ul>
          </ResumeSection>





          <ResumeSection header="Training and Certification">


                    <ul>
                  <li><a href="https://www.certmetrics.com/amazon/public/transcript.aspx?transcript=RLS2DY111E4QQQ9P" rel="noopener noreferrer" target="_blank"><strong>AWS CERTIFIED SOLUTION ARCHITECT – ASSOCIATE</strong></a><p>December 2017 – December 2020</p></li>

                  <li><a href="https://www.coursera.org/account/accomplishments/specialization/HSUAANKME4AG" rel="noopener noreferrer" target="_blank"><strong>COURSERA - DATA SCIENCE SPECIALIZATION</strong></a>
                  <p>Complete March 2018; 10 4-week courses, includes R, regression, data science practice, inference, machine learning</p></li>
                  </ul>
          </ResumeSection>




          <ResumeSection header="Experience">
            <ul>
              <li><strong>Cloud Architect | BenefitSolver | 03/2019 – current</strong>
                <ul>
                  <li>Architect AWS Serverless solution</li>
                </ul>
              </li>
              <li><strong>SOFTWARE ENGINEER | Nordstrom Credit | 07/2018 – 02/2019</strong>
                <ul>
                  <li>Refactor python code delivered by 3rd party vendor for AWS Lex Chatbot, upgrade from 2.7 to 3.6</li>
                  <li>Build CloudFormation templates and CI pipeline (GitLab) to automate deploy for Chat and API Layers</li>
                  <li>Developed Unix scripts to automated reporting, monitoring and build tasks</li>
                  <li>Built docker images to support CI flow</li>
                  <li>Used AWS Athena for reporting to perform data mining on legacy application logs</li>
                  <li>Consult and advise on AWS services including API Gateway, DynamoDB, SNS, Lex, Lambda, Athena, S3, CloudFormation</li>
                  <li>Developed reporting framework that leverages Lambda to kick off EC2 spot instance for ETL process on Cloudwatch logs</li>
                </ul>
              </li>
              <li>
                <strong>INDEPENDENT CONSULTANT | Cliff Consulting | 12/2017 – 07/2018</strong>
                <ul>
                  <li>AWS and Python support</li>
                  <li>Developed Serverless framework to generate MP3 files using ffmpeg</li>
                  <li>Build and support CI pipeline on AWS for ECS Cluster Service running .NET code on Docker with autoscaling for Backend and Serverless Angular code for the front end</li>
                </ul>
              </li>
              <li><strong>TECHNOLOGY MANAGER | Wells Fargo | 08/2007 – 10/2017</strong>
                <ul>
                  <li>Communicated with senior management and key product owners and stakeholders</li>
                  <li>Managed Java, Mainframe (Hogan), and C# teams; with number of (FTE) reports ranging from 8 to 40</li>
                  <li>Managed Department and application budgets, vendor invoice, staff planning, forecasting and cost allocation for $2mm – $4mm budgets</li>
                  <li>Interviewed and hired over 15 employees, and over 50 contract positions</li>
                  <li>Managed critical 24x7 applications with disbursed teams in US and India</li>
                  <li>Developed and reviewed BCP(Disaster Recovery) and Security Plans for key operational applications</li>
                  <li>Responsible for annual $2 million department budgets</li>

                </ul>
              </li>
              <li>
                <strong>WEB DEVELOPER | Wells Fargo | 08/2004 – 08/2007</strong>
                <ul>
                  <li>Team Lead for CIV team (business critical call center for 10k Wells Fargo retail agents)</li>
                  <li>Managed implementations of approximately 12,000 development hours annual</li>
                  <li>Oversaw projects through entire SDLC</li>
                  <li>Redesigned OO model to consolidate MVC pattern and using a factory pattern for invoking SOA across multiple service providers</li>
                  <li>Primarily worked with Java, Tomcat, Apache, Unix, and Oracle DBMS</li>

                </ul>
              </li>
              <li>
                <strong>INDEPENDENT CONSULTANT | Cliff Consulting | 11/2002 – 07/2004</strong>
                <ul>
                  <li>Java Development and Linux system support services</li>
                  <li>Developed and ran applications primarily using Java, LAMP (Linux, Apache, MySQL, Perl), Tomcat and J-Boss technologies; installing and provisioning blade servers in a Local Data center</li>
                </ul>
              </li>
              <li>
                <strong>WEB DEVELOPER | Navidec | 05/2000 – 11/2002</strong>
                <ul>
                  <li>Lead Developer supporting Java applications, WebLogic/J-Boss, with Oracle DBMS primarily</li>
                  <li>Oversaw projects from initiation through deployment phases</li>
                  <li>Worked on organization Software Configuration Management and release processes</li>
                  <li>Worked with DBA on SQL Modeling</li>
                </ul>
              </li>

            </ul>


          </ResumeSection>



          <ResumeSection header="Education">


                        <ul>

                        <li><strong>MS | MATHEMATICS | 1996 | LOUISIANA STATE UNIVERSITY, BATON ROUGE, LA</strong>
                        <div>&nbsp;Summer Internships at Los Alamos National Lab, 1997, 1998</div>
                          </li>

                        <li><strong>BS | MATHEMATICS | 1994 | VIRGINIA TECH, BLACKSBURG, VA</strong>
                          <div>&nbsp;Minor: Computer Science</div>
                          </li>
                        </ul>


          </ResumeSection>






          <ResumeSection header="Publication">


                <em>&quot;Positivity, Trotter Products, and Blow-up&quot;</em>; Matt Cliff, Jerome Goldstein, Markus Wacker; Positivity, Volume 8, Issue 2 pp 187 – 208, June 2004. – A new approach to blow-up results for nonlinear evolution equations.



          </ResumeSection>







          </div>
    );
  }
}

export default Resume;
