import React from "react";
import "./signIn-and-signUp-Page.style.scss";
import SignIn from "../../components/sign-in/sign-in.component";

import SignUp from "../../components/sign-up/sign-up.comonent";

const SignInAndSignUpPage = () => (
  <div className="sign-in-up">
    <SignIn />
    <SignUp />
  </div>
);

export default SignInAndSignUpPage;
