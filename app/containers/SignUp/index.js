/*
 *
 * Home
 *
 */
import React from 'react';
import Helmet from 'react-helmet';
import Skill from '../../components/Skill';
import './style.css';
//import './styleM.css';

const SignUp = (props) => {

  const success = props.success;
  const error = props.error;

  const modal = {
    display: props.modal ? 'block' : 'none', /* Hidden by default */
    position: 'fixed', /* Stay in place */
    zIndex: '1', /* Sit on top */
    left: '0',
    top: '0',
    width: '100%', /* Full width */
    height: '100%', /* Full height */
    overflow: 'auto', /* Enable scroll if needed */
    backgroundColor: 'rgba(0,0,0,0.4)', /* Black w/ opacity */
  };

   /* Modal Content/Box */
   const modalContent = {
     backgroundColor: '#fefefe',
     margin: '15% auto', /* 15% from the top and centered */
     padding: '20px',
     border: '1px solid #888',
     width: '80%', /* Could be more or less, depending on screen size */
   };

   const close = {
     float: 'right',
     fontSize: '28px',
     fontWeight: 'bold',
   };

  return (
    <div>
      {console.log('home')}
      <Helmet title="Home" meta={[ { name: 'description', content: 'Description of Home' }]}/>

      <div id="myModal" style={modal}>
        <div style={modalContent}>
          <span className="close" style={close} onClick={props.CloseModal}>
            &times;
          </span>

          <p>
            { success ? success : error }
          </p>
        </div>
      </div>

      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'column',
        justifyContent: 'center',
      }}>
        <label> Email </label>
        <input 
          type="email" 
          name="email" 
          placeholder="sophie@example.com"
          onChange={props.Email} 
          size={20}
        /> 

        <label> name </label>
        <input type="text" name="name" onChange={props.Name} /> 

        <label> Password </label>
        <input type="password" name="password" onChange={props.Password} /> 

        <label> Upload Profile Picture </label>
        <input type="file" name="avatar" onChange={props.Avatar} />
        <img src={props.preview} alt="" /> 

        <label> Bio </label>
        <input type="text" name="bio" onChange={props.Bio} /> 

        <label> Website </label>
        <input type="text" name="website" onChange={props.Website} /> 

        <label> Company </label>
        <input type="text" name="company" onChange={props.Company} /> 

        <label> Phone Number </label>
        <input type="tel" name="phoneNumber" onChange={props.PhoneNumber} onBlur={props.CheckDigits} /> 

        <label> Skills </label>
        <Skill skills={props.skills} AddSkill={props.AddSkill} />

        <label> Additional Skills </label>
        <input type="text" name="NewSkill" onBlur={props.NewSkill} /> 
        <button onClick={props.storeUser}> Sign up </button>
{      /*  <SelectedSkills skills={props.SelectedSkills} />
        <NewSkills skills={props.newSkillz} /> */}
        {/*props.selectedSkills ? props.selectedSkills : null*/}
        {/*props.newSkillz ? props.newSkillz : null*/}
      </div>
    </div>
  );
}
export default SignUp;
