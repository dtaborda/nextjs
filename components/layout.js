import React from 'react';

export default ({ children, title }) => (
  <div className="row">
    <div className="col-md-offset-3 col-md-6 col-ms-offset-3 col-ms-6">
      <div className="jumbotron">
        <div className="container">
          <div className="main">
            <div className="panel-heading">
              <div className="panel-title text-center">
                <h1 className="title">{title}</h1>
                <hr />
              </div>
            </div>
            <div className="main-login main-center">
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);
