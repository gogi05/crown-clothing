import SignUp from "../../components/SignUp";
import SignIn from "../../components/SignIn";
import "./style.scss";

const Authentication = () => {
  return (
    <div className="authentication-container">
      <SignIn />
      <SignUp />
    </div>
  );
};

export default Authentication;
