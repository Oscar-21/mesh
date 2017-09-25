/*
 *
 * Home
 *
 */
import React from 'react';
import Helmet from 'react-helmet';
import './style.css';
import './styleM.css';

export default class Home extends React.Component {

  render() {
    const success = this.props.success;
    const error = this.props.error;

    const modal = {
      display: this.props.modal ? 'block' : 'none', /* Hidden by default */
      position: 'fixed', /* Stay in place */
      zIndex: '1', /* Sit on top */
      left: '0',
      top: '0',
      width: '100%', /* Full width */
      height: '100%', /* Full height */
      overflow: 'auto', /* Enable scroll if needed */
      backgroundColor: 'rgb(0,0,0)', /* Fallback color */
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
        <Helmet title="Home" meta={[ { name: 'description', content: 'Description of Home' }]}/>

        <div id="myModal" style={modal}>
          <div style={modalContent}>
            <span className="close" style={close} onClick={this.props.CloseModal}>
              &times;
            </span>

            <p>
              { !success && !error ? <input type="text" name="newSkill" onChange={this.props.NewSkill} /> : null }
              { !success && !error ? <button onClick={this.props.storeUser}> Sign up </button> : null } 
              { success ? success : error }
            </p>
          </div>
        </div>

        <label> Email </label>
        <input 
          type="email" 
          name="email" 
          placeholder="sophie@example.com"
          onChange={this.props.Email} 
        /> 

        <label> name </label>
        <input type="text" name="name" onChange={this.props.Name} /> 

        <label> Password </label>
        <input type="password" name="password" onChange={this.props.Password} /> 

        <label> Upload Profile Picture </label>
        <input type="file" name="avatar" onChange={this.props.Avatar} />
        <img src={this.props.preview} alt="" /> 

        <label> Bio </label>
        <input type="text" name="bio" onChange={this.props.Bio} /> 

        <label> Website </label>
        <input type="text" name="website" onChange={this.props.Website} /> 

        <label> Company </label>
        <input type="text" name="company" onChange={this.props.Company} /> 

        <label> Phone Number </label>
        <input type="tel" name="phoneNumber" onChange={this.props.PhoneNumber} onBlur={this.props.CheckDigits} /> 

        <button onClick={this.props.storeUserData}> Sign up </button>

      </div>
    );
  }
}
