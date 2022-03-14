import React from "react";
import SocialIcon from "../SocialIcon/SocialIcon";
import { ContactWrapper, Email } from "./ContactElements";

function Contact() {
  return (
    <ContactWrapper id="contact">
      <div className="Container">
        <div className="SectionTitle">Get In Touch</div>
        <div className="BigCard">
          <Email>
            <span>ajitpandey917@gmail.com</span>
            <a
              className="btn PrimaryBtn"
              href="mailto:ajitpandey917@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Send Mail
            </a>
          </Email>
        </div>
          <div style={{ display: 'grid', justifyContent: 'center', margin: '5% 5%', fontSize:'20px' }}>
            <h2 style={{ display: 'flex', justifyContent: 'space-between', margin: '5% 0%' }} >
            <svg xmlns="http://www.w3.org/2000/svg" style={{height: '1.5rem'}} viewBox="0 0 20 20" fill="currentColor">
  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
</svg>
              +91 9576380242</h2>
            <h2 style={{ display: 'flex', justifyContent: 'space-between' }} >
            <svg xmlns="http://www.w3.org/2000/svg" style={{height:'1.5rem'}} viewBox="0 0 20 20" fill="currentColor">
  <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd" />
</svg>
              &nbsp; ARA, BIHAR, India
            </h2>
          </div>
        <SocialIcon />

      </div>
    </ContactWrapper>
  );
}

export default Contact;
