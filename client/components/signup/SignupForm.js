import React from 'react';
import classnames from 'classnames';
import {browserHistory} from 'react-router';


class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username:'',
      email: '',
      password: ''
    }

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

  onSubmit(e) {
    e.preventDefault();
    let errors={};
    this.setState({ errors });
    const isValid = Object.keys(errors).length===0

    if(isValid){
      this.props.userSignupRequest(this.state).then(
        ()=>{
          this.props.addFlashMessage({
           type: 'Success',
           text: 'You Signed up successfully. Welcome!'
         });
          browserHistory.push('/');
        }
      );
    }
  }

  render() {
    return(
      <form onSubmit = {this.onSubmit}>
      <h1>Student Registration</h1>

      <div className="form-group">
      <label className="control-label">Username</label>
      <input type="text"
             value={this.state.username}
             onChange={this.onChange}
             name="username"
             type="username"
             required
             className="form-control"/>
      </div>
        <div className="form-group">
        <label className="control-label">Email</label>
        <input type="text"
               value={this.state.email}
               onChange={this.onChange}
               name="email"
               type="email"
               pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$"
               required
               className="form-control"/>
        </div>

        <div className="form-group">
        <label className="control-label">Password</label>
        <input type="password"
               value={this.state.password}
               onChange={this.onChange}
               name="password"
               type="password"
               pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
               title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
               required
               className="form-control"/>
        </div>

        <div className="form-group">
        <button className="btn btn-primary btn-lg">Sign up</button>
        </div>

      </form>
    );
  }
}

 SignupForm.propTypes = {
   userSignupRequest: React.PropTypes.func.isRequired,
   addFlashMessage: React.PropTypes.func.isRequired


}
export default SignupForm;
