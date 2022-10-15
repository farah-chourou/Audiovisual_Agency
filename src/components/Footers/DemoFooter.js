
import React from "react";

// reactstrap components
import { Row, Container } from "reactstrap";

function DemoFooter() {
  return (
    <footer className="footer footer-white" style={{backgroundColor:"#388EB2",color:"white" ,fontSize:"150%"}}>
      <Container>
        <Row>
          <nav className="footer-nav">
            <ul>
              <li>
                <a
                 
                  target="_blank"
                >
Tawfik Production                </a>
              </li>
            
             
            </ul>
          </nav>
          <div className="credits ml-auto">
            <span className="">
              © {new Date().getFullYear()}, made with{" "}
              <i className="fa fa-heart heart" /> by Twins Tim
            </span>
          </div>
        </Row>
      </Container>
    </footer>
  );
}

export default DemoFooter;
