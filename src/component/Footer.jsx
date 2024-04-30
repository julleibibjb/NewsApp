import React from "react";
import {
  Box,
  Container,
  Row,
  Column,
  FooterLink,
  Heading,
} from "./FooterStyles.jsx";
import "../assets/styles/Home.css";

const Footer = () => {
  return (
    <Box className="footer">
      <Container>
        <Row>
          <Column>
            <Heading>About Us</Heading>
            <FooterLink href="#">about us</FooterLink>
            <FooterLink href="#">Terms and Conditions</FooterLink>
            <FooterLink href="#">privacy policy</FooterLink>
          </Column>
          <Column>
            <Heading>News</Heading>
            <FooterLink href="/sports">Sports</FooterLink>
            <FooterLink href="/entertainment">Entertainment</FooterLink>
            <FooterLink href="/economy">Economy</FooterLink>
            <FooterLink href="/weather">Weather</FooterLink>
          </Column>
          <Column>
            <Heading>Contact Us</Heading>
            <FooterLink href="#">Tel 568-345-739</FooterLink>
            <FooterLink href="#">Kenya</FooterLink>
            <FooterLink href="#">Nairobi</FooterLink>
            <FooterLink href="#">1331 Ridge Road</FooterLink>
          </Column>

          <Column>
            <Heading>Social Media</Heading>
            <FooterLink href="#">
              <i className="fab fa-facebook-f">
                <span style={{ marginLeft: "10px" }}>Facebook</span>
              </i>
            </FooterLink>
            <FooterLink href="#">
              <i className="fab fa-instagram">
                <span style={{ marginLeft: "10px" }}>Instagram</span>
              </i>
            </FooterLink>
            <FooterLink href="#">
              <i className="fab fa-twitter">
                <span style={{ marginLeft: "10px" }}>Twitter</span>
              </i>
            </FooterLink>
            <FooterLink href="#">
              <i className="fab fa-youtube">
                <span style={{ marginLeft: "10px" }}>Youtube</span>
              </i>
            </FooterLink>
          </Column>
        </Row>
      </Container>
    </Box>
  );
};
export default Footer;
