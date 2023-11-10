import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createUser } from "../../redux/actions/userSignUp_action";
import { useNavigate } from "react-router-dom";
import FormField from "../elements/FormField";
import Button from "../elements/Button";

const FormSignUp = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();
  
    const createUserAction = (email, password) =>
      dispatch(createUser(email, password));
  
    const handlesignin = async (e) => {
      e.preventDefault();
      if (email !== "" && password !== "") {
        console.log("creating user");
        await createUserAction(email, password);
        navigate("/log-in");
      } else {
        console.log("Enter all the details");
      }
    };

  return (
    <form onSubmit={handlesignin} className="mx-auto flex flex-col p-8 w-[80%] gap-8 lg:w-[50%]">
      <p>Create a new account</p>
      <FormField label="Email" type="email" name="email" onChange={(e) => setEmail(e.target.value)} />
      <FormField label="Password" type="password" name="password" onChange={(e) => setPassword(e.target.value)} />
      <Button text="Register" type="primary" />
    </form>
  );
};

export default FormSignUp;
