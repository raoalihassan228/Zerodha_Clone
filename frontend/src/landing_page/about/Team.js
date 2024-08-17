import React from "react";

function Team() {
  return (
    <div className="container">
      <div className="row p-3 border-top mt-5">
        <h1 className="fs-2 text-center">People</h1>
      </div>
      <div
        className="row p-3 text-muted"
        style={{ lineHeight: "1.8", fontSize: "1.1em" }}
      >
        <div className="col-6 p-3 text-center">
          <img
            src="media/images/ah.jpg"
            alt="Ali Hassan"
            style={{ borderRadius: "100%", width: "60%" }}
          />
          <h4 className="mt-5" style={{ marginLeft: "1rem" }}>
            Rao Ali Hassan
          </h4>
          <h6 style={{ marginLeft: "1rem" }}>Founder, CEO</h6>
        </div>
        <div className="col-6 p-3">
          <p>
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the
            hurdles he faced during his decade long stint as a trader. Today,
            Zerodha has changed the landscape of the Indian broking industry.
          </p>
          <p>
            He is a member of the SEBI Secondary Market Advisory Committee
            (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>
          <p>Playing basketball is his zen.</p>
          <p>
            Connect on{" "}
            <a href="" className="f-link">
              Homepage
            </a>{" "}
            /{" "}
            <a className="f-link" href="">
              TradingQnA
            </a>{" "}
            /{" "}
            <a className="f-link" href="">
              Twitter
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Team;
