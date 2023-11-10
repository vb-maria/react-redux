import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logoutUser } from "../../redux/actions/userLogOut_action";
import firebase from '../../firebase/firebase_config';
import Button from "../elements/Button";
import CustomLink from "../elements/CustomLink";
import ListItem from "../elements/ListItem";

const Navbar = () => {
  const loginSelector = useSelector((state) => state.userLogIn);
  const signinSelector = useSelector((state) => state.userLogOut);
  const [userState, setUserState] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate(); // Use useNavigate hook
  const logoutUserAction = () => dispatch(logoutUser());

  useEffect(() => {
    firebase.getUserState().then(user => {
      setUserState(user);
    });
  }, [loginSelector, signinSelector]); 

  const logout = async () => {
    console.log("User logged out");
    setUserState(null);
    await logoutUserAction();
    navigate("/");
  };

  let buttons;
  if (
    (loginSelector.user && loginSelector.user.hasOwnProperty("user")) ||
    (signinSelector.user && signinSelector.user.hasOwnProperty("user")) ||
    userState != null
  ) {
    buttons = (
      <>
        
        <Button text="Logout" type="primary" onClick={logout} />
    
      </>
    );
  } else {
    buttons = (
      <>
     
     <ListItem>
          <CustomLink to="/register">Register</CustomLink>
        </ListItem>
        <ListItem>
          <CustomLink to="/log-in">Login</CustomLink>
        </ListItem>
      </>
    );
  }

  return (
    <nav className="p-4 fixed w-full top-0 z-10">
      <div className="bg-white max-w-8xl mx-auto px-4 rounded-lg sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex justify-between w-full">
            <div className="flex items-center">
            <Link to="/">
                <h1 className="flex gap-2 items-center prefetch text-2xl text-text font-medium">BP <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#000" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
</svg>
</h1>
              </Link>
            </div>
            <div className="flex items-center space-x-10">
              {buttons}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
