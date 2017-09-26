/**
*
* Skill
*
*/

import React from 'react';

import './style.css';
import './styleM.css';

export default class Skill extends React.Component {
/*  constructor(props) {
    super(props);
    this.state = {
      skills: props.skills,
    };
  }*/

  
  render() {
    return (
      <SkillList skills={this.props.skills} AddSkill={this.props.AddSkill} />      
    );
  }
}

function SkillList(props) {
  const SkillTags = props.skills.map(skill => <SkillTag key={skill.id} skill={skill.name} />);
  return (
    <select onChange={props.AddSkill}>
      <option> none </option>
      {SkillTags}
    </select>
  );
}

const SkillTag = props => <option> {props.skill} </option>; 
