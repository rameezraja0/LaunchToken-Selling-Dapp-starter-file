import React from "react";

const Team = () => {
  return (
    <section id="team" className="container">
      <div>
        <div className="title_default_light title_border text-center">
          <h4
            className="animation"
            data-animation="fadeInUp"
            data-animation-delay="0.2s"
          >
            Meet Our Team
          </h4>
        </div>
        <div className="bootstrap snippets bootdey">
          <div className="row">
            <div className="col-md-4">
              <a className="cta text-center" href="#/">
                <h3 className="name">
                  <b>Muhammad</b>
                </h3>
                <img
                  alt=""
                  className="img-responsive"
                  src="assets/images/mr.jpg"
                />
                <h2>Designer</h2>
                <div className="title_default_light title_border">
                  <p>Adventure time</p>
                </div>
              </a>
            </div>
            <div className="col-md-4">
              <a className="cta text-center" href="#/">
                <h3 className="name">
                  <b>Abdul Rameez</b>
                </h3>
                <img
                  alt=""
                  className="img-responsive"
                  src="assets/images/r.jpg"
                />
                <h2>Developer</h2>
                <div className="title_default_light title_border">
                  <p>Adventure time</p>
                </div>
              </a>
            </div>
            <div className="col-md-4">
              <a className="cta text-center" href="#/">
                <h3 className="name">
                  <b>Muzammil Mahboob</b>
                </h3>
                <img
                  alt=""
                  className="img-responsive"
                  src="assets/images/mm.jpg"
                />
                <h2>Tester</h2>
                <div className="title_default_light title_border">
                  <p>Adventure time</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
