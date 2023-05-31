import React from "react";

function LearningBootstrap() {
  return (
    <div className="container-fluid">
      <nav class="navbar navbar-light bg-light">
        <a class="navbar-brand" href="#">
          Navbar
        </a>
      </nav>
      <div className="row">
        <div className="col-sm-12 col-md-2 bg-light" style={{"height":'100vh'}}>
            <ul style={{"listStyle":'none'}}>
                <li>first component</li>
                <li>second component</li>
                <li>second component</li>
                <li>second component</li>
                <li>second component</li>
            </ul>
        </div>
        <div className="col-sm-12 col-md-10">
            <div className="row">
                    <div className="col">
                        add money
                    </div>
            </div>
            <div className="row">
            <div className="col">
                    sub col 4
            </div>
            <div className="col">
                sub col 4
            </div>
            <div className="col">

            </div>
            </div>

        </div>

      </div>

    </div>
  );
}

export default LearningBootstrap;
