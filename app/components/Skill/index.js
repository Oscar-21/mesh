/**
*
* Skill
*
*/

import React from 'react';

import './style.css';
import './styleM.css';

export default class Skill extends React.PureComponent {
  constructor() {
    super();
    this.state = {
    };
  }

  }
}

function SkillList(props) {
  const SkillListItems = props.skills.map(skill => <SkillTag key={skill.id} skill={skill} />);
  return (
      <ul>{SkillListItems}</ul>
  );
}



const SkillTag = props => <li> {props.skill} </li>; 
