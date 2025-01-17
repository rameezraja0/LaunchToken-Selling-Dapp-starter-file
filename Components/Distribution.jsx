import React from "react";

const Distribution = () => {
  return (
    <section className="container">
      <div className="row">
        <div className="col-lg-6 col-md-12 col-sm-12 res_md_mb_40">
          <div className="title_default_light title_border text-center">
            <h4
              className="animation"
              data-animation="fadeInUp"
              data-animation-delay="0.2s"
            >
              Token Sale Proceed
            </h4>
          </div>

          <div
            className="lg_pt_20 res_sm_pt_0 text-center animation"
            data-animation="fadeInRight"
            data-animation-delay="0.2s"
          >
            <img
              src="assets/images/ICO1.webp"
              alt=""
              className="sale-proceeds3"
            />
          </div>
          <div className="divider small_divider"></div>
          <ul className="list_none list_chart text-center">
            <li>
              <span className="chart_bx color4"></span>
              <span>1 BNB = 300000 AI</span>
            </li>
            <li>
              <span className="chart_bx color3"></span>
              <span>1 BNB = 180000 AI</span>
            </li>
            <li>
              <span className="chart_bx color5"></span>
              <span>1 BNB = 85000 AI</span>
            </li>
          </ul>
        </div>

        <div className="col-lg-6 col-md-12 col-sm-12">
          <div className="title_default_light title_border text-center">
            <h4
              className="animation"
              data-animation="fadeInUp"
              data-animation-delay="0.2s"
            >
              Token Distribution
            </h4>
          </div>
          <div
            className="lg_pt_20 res_sm_pt_0 text-center animation"
            data-animation="fadeInRight"
            data-animation-delay="0.2s"
          >
            <img src="assets/images/ICO2.webp" alt="" />
          </div>
          <div className="divider small_divider"></div>
          <ul className="list_none list_chart text-center">
            <li>
              <span className="chart_bx color1"></span>
              <span>ICO (Presale)</span>
            </li>
            <li>
              <span className="chart_bx color2"></span>
              <span>Liquidity Pool</span>
            </li>
            <li>
              <span className="chart_bx color3"></span>
              <span>Ecosystem Development</span>
            </li>
            <li>
              <span className="chart_bx color4"></span>
              <span>Team Allocation</span>
            </li>
            <li>
              <span className="chart_bx color5"></span>
              <span>Patnerships</span>
            </li>
            <li>
              <span className="chart_bx color6"></span>
              <span>Rewards</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Distribution;
