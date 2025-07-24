import React from 'react';

function Articles() {
  return (
    <div className="container-fluid">
      <div className="h3">
        Articles
      </div>

      <div className="card-deck mt-4">
        <div className="card border border-info rounded">
          <div className="card-body">
            <h5 className="card-title">Capstone Report</h5>
            <p className="card-text">Coursera Data Science Specialization offered by John Hopkins</p>
            <a href="http://rpubs.com/mcliff/qknewt" className="card-link">Capstone Report</a>
            <h6 className="card-subtitle text-muted">published 3/16/2018</h6>
          </div>
        </div>
      </div>

      <div className="card-deck mt-4">
        <div className="card border border-info rounded">
          <div className="card-body">
            <h5 className="card-title">Linear Regression</h5>
            <p className="card-text">Overview of Linear Regression and some historical context.</p>
            <a href="http://rpubs.com/mcliff/basic-linear-regression" className="card-link">Linear Regression</a>
            <h6 className="card-subtitle text-muted">published 3/22/2018</h6>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Articles;
