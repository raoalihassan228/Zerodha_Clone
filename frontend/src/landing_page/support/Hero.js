import React from "react";

function Hero() {
  return (
    <section className="container-fluid" id="supportHero">
      <div className="p-5" id="supportWrapper">
        <h4>Support Portal</h4>
        <a href="">Track Tickets</a>
      </div>
      <div className="row p-3 m-3">
        <div className="col-6 p-5">
          <h2 className="fs-3 mb-3">Search for an answer or browse help topics to create a ticket</h2>
          <input className="mb-3" placeholder="Eg. How do I activate F&O, why is my order getting rejected" />
          <br />
          <a href="">Track account openning</a> &nbsp;
          <a href="">Track account openning</a> &nbsp;
          <a href="">Track account openning</a> &nbsp;
          <a href="">Track account openning</a> &nbsp;
        </div>
        <div className="col-6 p-5">
          <h2 className="fs-4">Featured</h2>
          <ol style={{lineHeight:'1.7'}}>
            <li>
              <a href="">Current Takeovers and Delisting - January 2024</a>
            </li>
            <li>
              <a href="">Latest Intraday leverages - MIS & CO</a>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
}

export default Hero;