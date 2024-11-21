import { useState } from "react";
import {
  signInWithGooglePopup,
  createUserfromAuth,
  signInAuthUserWithEmailAndPassword,
} from "../../utils/firebase";

import Button, { BUTTON_TYPE } from "../Button";
import FormInput from "../FormInput";
import "./style.scss";

const defaultEntries = {
  email: "",
  password: "",
};

const SignIn = () => {
  const [formFields, setFormFields] = useState(defaultEntries);
  const { email, password } = formFields;

  const signInGoogleUser = async () => {
    await signInWithGooglePopup();
  };

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    try {
      await signInAuthUserWithEmailAndPassword(email, password);
    } catch (error) {
      console.log("Error with sign-in: ", error.message);
    }
  };

  return (
    <div className="sign-in-container">
      <h2>Already have an account?</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={onSubmitHandler}>
        <FormInput
          label="Email"
          type="email"
          placeholder="Enter your email"
          name="email"
          value={email}
          onChange={handleOnChange}
        />
        <FormInput
          label="Email"
          type="password"
          placeholder="Enter password"
          name="password"
          value={password}
          onChange={handleOnChange}
        />
        <div className="buttons-container">
          <Button type="submit" buttonType={BUTTON_TYPE.BASE}>
            Sign In
          </Button>
          <Button
            type="button"
            buttonType={BUTTON_TYPE.GOOGLE}
            onClick={signInGoogleUser}
          >
            Google sign in
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
