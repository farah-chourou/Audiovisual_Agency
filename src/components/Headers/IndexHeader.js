
import React from "react";

// reactstrap components
import { Container } from "reactstrap";

// core components

function IndexHeader() {
  return (
    <>
      <div
        className="page-header section-dark"
        style={{
          background: "linear-gradient(to top, #2F98C4, 80%, white)"

        }}
      >
        <div className="" />
        <div className="content-center">
          <Container>
            <div className="title-brand">
              <h1 className="text-dark  " style={{fontSize:"110px"}}> <b> <span style={{color:"white"}}> Tawfik </span>  <span style={{color:"white"}}> Production</span>  </b></h1>
              <div className="fog-low">
                <img
                  alt="..."
                  src={require("assets/img/fog-low.png").default}
                />
              </div>
              <div className="fog-low right">
                <img
                  alt="..."
                  src={require("assets/img/fog-low.png").default}
                />
              </div>
            </div>
            <h2 className="presentation-subtitle text-center">
          <p style={{fontSize:"200%"}}> شركة التوفيق للانتاج السمعي البصري
</p> 
            </h2>
          </Container>
        </div>
        <div
          className="moving-clouds"
          style={{
            backgroundImage:
              "url(" + require("assets/img/clouds.png").default + ")",
          }}
        />
        <h6 className="category category-absolute">
        
          <a
            href="https://www.creative-tim.com?ref=pkr-index-page"
            target="_blank"
          >
           
          </a>
        </h6>
      </div>
    </>
  );
}

export default IndexHeader;
