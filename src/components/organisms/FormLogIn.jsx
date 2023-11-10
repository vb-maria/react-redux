import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { loginUser } from "../../redux/actions/userLogIn_action";
import { useNavigate } from "react-router-dom";
import FormField from "../elements/FormField";
import Button from "../elements/Button";

const FormLogIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const logInUserAction = (email, password) => dispatch(loginUser(email, password));

  const login = async (e) => {
    e.preventDefault();

    if (email !== "" && password !== "") {
      console.log("User logged in");
      let user = await logInUserAction(email, password);
      if (user) {
        setRedirect(true);
      }
    } else {
      console.log("Fill all the fields");
    }
  };

  // Use useEffect to trigger the navigation after the component is rendered
  useEffect(() => {
    if (redirect) {
      navigate("/coming-soon");
    }
  }, [redirect, navigate]); // The effect depends on the 'redirect' and 'navigate' variables

  return (
    <form onSubmit={login} className="mx-auto flex flex-col p-8 w-[80%] gap-8 lg:w-[50%]">
      <p>Welcome back!</p>
      <FormField label="Email" type="email" name="email" onChange={(e) => setEmail(e.target.value)} />
      <FormField label="Password" type="password" name="password" onChange={(e) => setPassword(e.target.value)} />
      <Button text="Login" type="primary" />
    </form>
  );
};

export default FormLogIn;
