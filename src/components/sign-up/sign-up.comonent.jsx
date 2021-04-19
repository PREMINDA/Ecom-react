import React from "react";
import InputForm from "../forminput/forminput.component";
import CustomButton from "../custom-button/custom-button.component";

import { auth, creatUserProfileDocument } from "../../firebase/firebase.util";

class SignUp extends React.Component {
  constructor() {
    super();

    this.state = {
      displayName: "",
      email: "",
      password: "",
      confirmPassword: "",
    };
  }

  handleSubmit = async (event) => {
    event.preventDefault();

    const { displayName, email, password, confirmPassword } = this.setState;
    if (password != confirmPassword) {
      alert("password don't match");
      return;
    }
    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      await creatUserProfileDocument(user, { displayName });

      this.setState({
        displayName: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
    } catch (error) {
      console.log(error);
    }
  };

  handleChange = (event) => {
    const { value, name } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="sign-up">
        <h2 className="title">Dont Have an Account</h2>
        <span>Sign up with email and password</span>
        <form className="sign-up-form" onClick={this.handleSubmit}>
          <InputForm
            name="displayName"
            type="text"
            value={this.state.displayName}
            label="Name"
            handleChange={this.handleChange}
            required
          />
          <InputForm
            name="email"
            type="email"
            value={this.state.email}
            label="Email"
            handleChange={this.handleChange}
            required
          />
          <InputForm
            name="password"
            type="password"
            value={this.state.password}
            label="Password"
            handleChange={this.handleChange}
            required
          />
          <InputForm
            name="confirmPassword"
            type="password"
            value={this.state.confirmPassword}
            label="Confirm Password"
            handleChange={this.handleChange}
            required
          />
          <CustomButton type="submit">Sign In</CustomButton>
        </form>
      </div>
    );
  }
}

export default SignUp;
