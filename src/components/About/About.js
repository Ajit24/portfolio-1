import React from "react";
import {
  Image,
  Technologies,
  Tech,
  TechImg,
  TechName,
  ContactWrapper,
} from "./AboutElements";
function About() {
  return (
    <ContactWrapper id="about">
      <div className="Container">
        <div className="SectionTitle">About Me</div>
        <div className="BigCard">
          {/* <Image
            src={photo}
            alt="man-svgrepo"
            className="smimg"
          /> */}
          <div className="AboutBio">
            Hello! My name is <strong>Ajit Kumar Pandey</strong> .
          </div>
          <div className="AboutBio tagline2">
            I am a FullStack Developer and a curious person who loves to know how different things work together. I love to BUILD STUFF and connect with people smarter than me!

            When I am not smashing the keyboard, you will find me playing pubg, reading or watching netflix.

            Currently I am a student at Masai School.
          </div>
          
        </div>
      </div>
    </ContactWrapper>
  );
}

export default About;
