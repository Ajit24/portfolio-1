import React from 'react'
import { stackList } from "../../data/ProjectData";
import {
    Image,
    Technologies,
    Tech,
    TechImg,
    TechName,
    ContactWrapper,
  } from "../About/AboutElements";

export const Skills = () => {
    return (
        <div className="ProjectWrapper" id="skills" >
            <div className="Container">
            <div className="SectionTitle" style={{paddingTop: "3.5rem",marginTop: "5.5rem"}} >Skills</div>
            <div className="BigCard">
            <Technologies>
            {stackList.map((stack, index) => (
              <Tech key={index} className="tech">
                <TechImg src={stack.img} alt={stack.name} />
                <TechName>{stack.name}</TechName>
              </Tech>
            ))}
          </Technologies>
            </div>
            </div>
        </div>
    )
}
