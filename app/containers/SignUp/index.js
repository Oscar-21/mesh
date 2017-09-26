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

class SignUp extends React.Component {

  constructor() {
    super();
    this.state = {
      name: '',
      password: '',
      email: '',
      spaceID: 1,
      company: '',
      website: '',
      bio: '',
      phoneNumber: '',
      avatar: '',
      preview: '',
      data: {},
      success: '',
      modal: false,
      error: '',
      // Skills
      skills: [],
      newSkill: [],
      selectedSkills: [],

    };
  }

  componentDidMount() {
    this.loadSkills();
  }

  loadSkills = () => {
    fetch('http://react.app/api/skills'
    ).then(response => 
      response.json()
    ).then((json) => { 
      this.setState({ skills: json });
    });
  }
 
  render() {
    const success = this.state.success;
    const error = this.state.error;
    const modal = this.state.modal;

    const modalStyle = {
      display: modal ? 'block' : 'none', /* Hidden by default */
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
        <Helmet title="Home" meta={[ { name: 'description', content: 'Description of Home' }]} />
  
        {this.Modal}

        <form>

          <label> Email </label>
          <input type="email" name="email" placeholder="sophie@example.com" onChange={this.Email} /> 

          <label> name </label>
          <input type="text" name="name" onChange={this.Name} /> 

          <label> Password </label>
          <input type="password" name="password" onChange={this.Password} /> 

          <label> Upload Profile Picture </label>
          <input type="file" name="avatar" onChange={this.Avatar} />
          <img src={this.state.preview} alt="" /> 

          <label> Bio </label>
          <input type="text" name="bio" onChange={this.Bio} /> 

          <label> Website </label>
          <input type="text" name="website" onChange={this.Website} /> 

          <label> Company </label>
          <input type="text" name="company" onChange={this.Company} /> 

          <label> Phone Number </label>
          <input type="tel" name="phoneNumber" onChange={this.PhoneNumber} onBlur={this.CheckDigits} /> 

          <label> Skills </label>
          <Skill skills={this.state.skills} AddSkill={this.AddSkill} />

          <label> Additional Skills </label>
          <input type="text" name="NewSkill" onBlur={this.NewSkill} /> 
          <button onClick={this.storeUser}> Sign up </button>
  {      /*  <SelectedSkills skills={props.SelectedSkills} />
          <NewSkills skills={props.newSkillz} /> */}
          {/*props.selectedSkills ? props.selectedSkills : null*/}
          {/*props.newSkillz ? props.newSkillz : null*/}
        </form>

        <div id="myModal" style={modalStyle}>
          <div style={modalContent}>
            <span className="close" style={close} onClick={this.CloseModal}>
              &times;
            </span>

            <p>
              { success ? success : error }
            </p>
          </div>
        </div>
        
      </div>
    );

} 

  CloseModal = () => { this.setState({ modal: false }) }
  Name = (e) => { this.setState({ name: e.target.value  }) }
  Password = (e) => { this.setState({ password: e.target.value  }) }
  Email = (e) => { this.setState({ email: e.target.value  }) }
  Company = (e) => { this.setState({ company: e.target.value  }) }
  PhoneNumber = (e) => { this.setState({ phoneNumber: e.target.value  }) }
  Bio = (e) => { this.setState({ bio: e.target.value  }) }
  Website = (e) => { this.setState({ website: e.target.value  }) } 

  NewSkill = (e) => {
    if (this.state.newSkill.length === 0) {
      const skill = this.state.newSkill.slice();
      skill.push(e.target.value);
      this.setState({ newSkill: skill }); 
    } else {
      const skill = this.state.newSkill.slice();
      const check = skill.indexOf(e.target.value) > -1;

      if (!check) {
        console.log('old !== new');
        skill.push(e.target.value);
        this.setState({ newSkill: skill });
      } else {
        console.log('already in array');
      }
    }
  }

  CheckDigits = () => {
    if (this.state.phoneNumber.length !== 7) {
      this.setState({
        modal: true,
        success: '',
        error: 'Phone number needs sleven digits'
      });
    }
  }

  Avatar = (e) => {
    e.preventDefault();
    let reader = new FileReader();
    let file = e.target.files[0];
    reader.onloadend = () => {
      this.setState({ avatar: file, preview: reader.result });
    };
    reader.readAsDataURL(file);
  }

  storeUser = () => {
    const data = new FormData();
//    const selectedSkills = this.state.selectedSkills;
  //  const newSkills = this.state.newSkill.length !== 1 ? selectedSkills.concat(this.state.newSkill) : selectedSkills;
    data.append('name', this.state.name);
    data.append('email', this.state.email);
    data.append('password', this.state.password);
    data.append('avatar', this.state.avatar);
    data.append('spaceID', this.state.spaceID);

    // optional input
    if (this.state.company) data.append('company', this.state.company);
    if (this.state.bio) data.append('bio', this.state.bio);
    if (this.state.website) data.append('website', this.state.website);
    if (this.state.phoneNumber) data.append('phoneNumber', this.state.phoneNumber);
    if (this.state.newSkill.length !== 0) data.append('newSkill', this.state.newSkill);
    if (this.state.selectedSkills.length !== 0) data.append('skills', this.state.selectedSkills);

    fetch('http://react.app/api/SignUp', {
      method: 'post',
      body: data,
    })
    .then(response => { 
      return response.json();
    })
    .then(json => { 
      if (json.success) {
        this.setState({ 
          success: json.success, 
          modal: true, 
          error: '' 
        });
      }

      if (json.error) {
        this.setState({ 
          error: json.error,
          modal: true,
          success: ''
        });
      }
    })
    .catch(err => {
      alert(`Error in fetching data from server: ${err}`);
    });

//    this.setState({ data: data });
  }

/*  storeUser = () => {
    console.log(this.state.data);
    fetch('http://react.app/api/SignUp', {
      method: 'post',
      body: this.state.data,
    })
    .then(response => { 
      return response.json();
    })
    .then(json => { 
      if (json.success) {
        this.setState({ 
          success: json.success, 
          modal: true, 
          error: '' 
        });
      }

      if (json.error) {
        this.setState({ 
          error: json.error,
          modal: true,
          success: ''
        });
      }
    })
    .catch(err => {
      alert(`Error in fetching data from server: ${err}`);
    });
  } */

// <Skill /> Functions

  AddSkill = (e) => {
    const skill = this.state.selectedSkills.slice();
    const check = skill.indexOf(e.target.value) > -1;

    if (!check) {
      console.log(`AddSkill: ${e.target.value}`);
      console.log(`AddSkill Type: ${typeof e.target.value}`);
      skill.push(e.target.value);
      this.setState({ selectedSkills: skill });
    } else {
      console.log('already in array');
    }
  }


}
export default SignUp;
