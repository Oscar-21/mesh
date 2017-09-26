/**
 *
 * App.react.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../Home';
import About from '../About';
import SignUp from '../SignUp';
import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      // <SignUp />
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

 /* componentDidUpdate(prevState) {
    if (prevState.selectedSkills !== this.state.selectedSkills) {
      console.log('new skill yo');
      this.storeUserData();
    }
  }*/

  loadSkills = () => {
    fetch('http://react.app/api/skills'
    ).then(response => 
      response.json()
    ).then((json) => { 
      this.setState({ skills: json });
    });
  }
  

  render() {
    return (
      <div>
        {console.log('app')}
        <NavBar />

        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/about' component={About} />
          <Route path='/join' render={ () => 
            <SignUp 
              CloseModal={this.CloseModal}
              Name={this.Name}
              Password={this.Password}
              Email={this.Email}
              Company={this.Company}
              PhoneNumber={this.PhoneNumber}
              Bio={this.Bio}
              WebSite={this.WebSite}
              NewSkill={this.NewSkill}
              CheckDigits={this.CheckDigits}
              Avatar={this.Avatar}
              storeUser={this.storeUser}
              modal={this.state.modal}
              success={this.state.success}
              error={this.state.error}
              preview={this.state.preview}
              skills={this.state.skills}
              newSkillz={this.state.newSkill}
              AddSkill={this.AddSkill}
              selectedSkills={this.state.selectedSkills}
              loadSkills={this.loadSkills}
            />} 
          />
          <Route render= {() => <p>Not Found!</p>} />
        </Switch>

        <Footer />
            
      </div>
    );
  }

  // <SignUp /> Functions
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
export default App;


