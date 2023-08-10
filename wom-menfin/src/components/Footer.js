import React from "react";
import "./styles.css";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

const Footer= () => {
  return (
    <MDBFooter color="blue" className="font-small pt-4 mt-4" style={{ backgroundColor: '#21081a' }}>
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="6">
            <h5 className="title text-success" >Footer Content</h5>
            <p className="text-success">
              Here you can use rows and columns here to organize your footer
              content.
            </p>
          </MDBCol>
          <MDBCol md="6">
            <h5 className="title text-success">Quick Links</h5>
            <ul className="footer-links">
              <li className="list-unstyled text-success">
                <a className="text-success" href="/Quiz">Quiz</a>
              </li>
              <li className="list-unstyled text-success">
                <a className="text-success" href="#!">News Letter</a>
              </li>
              <li className="list-unstyled text-success">
                <a className="text-success" href="/AboutUs">About Us</a>
              </li>
              
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3 text-success">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright Wom-MenFin
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default Footer;



    
