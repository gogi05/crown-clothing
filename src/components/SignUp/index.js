import { useState } from "react";
import {
  createAuthUserWithEmailAndPassword,
  createUserfromAuth,
} from "../../utils/firebase";
import FormInput from "../FormInput";
import Button, { BUTTON_TYPE } from "../Button";
import "./style.scss";

const defaultformFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUp = () => {
  const [formFields, setformFields] = useState(defaultformFields);

  const { displayName, email, password, confirmPassword } = formFields;

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setformFields({ ...formFields, [name]: value });
  };

  const onSubmitBtn = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("passwords do not match");
      return;
    }

    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );

      await createUserfromAuth(user, { displayName });
    } catch (error) {
      console.log("Error occured: ", error.message);
    }

    setformFields(defaultformFields);
  };

  return (
    <div className="sign-up-container">
      <h2>Don't have an account</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={onSubmitBtn}>
        <FormInput
          label="Display Name: "
          type="text"
          placeholder="Enter your name"
          name="displayName"
          value={displayName}
          onChange={handleOnChange}
        />
        <FormInput
          label="Email: "
          type="email"
          placeholder="Enter your email"
          name="email"
          value={email}
          onChange={handleOnChange}
        />
        <FormInput
          label="Password: "
          type="password"
          placeholder="Enter your password"
          name="password"
          value={password}
          onChange={handleOnChange}
        />
        <FormInput
          label="Confirm Password: "
          type="password"
          placeholder="Confirm your password"
          name="confirmPassword"
          value={confirmPassword}
          onChange={handleOnChange}
        />
        <Button type="submit" buttonType={BUTTON_TYPE.BASE}>
          Sign up
        </Button>
      </form>
    </div>
  );
};

export default SignUp;
