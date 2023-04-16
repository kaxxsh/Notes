import React, { useContext } from "react";
import { UserContext } from "../Context/UserProvider";
import TextField from "@mui/material/TextField";
import "../Style/Signin.css";
import supabase from "../supabase";
import { useNavigate } from "react-router-dom";

function Signin() {
  const { Email, setEmail, Password, setPassword } = useContext(UserContext);
  const navigate = useNavigate();
  const handleSignin = async (e) => {
    e.preventDefault();

    let { data, error } = await supabase.auth.signInWithPassword({
      email: Email,
      password: Password,
    });
    {
      !error && navigate("/notes");
    }
  };
  return (
    <div className="Signin-Container">
      <form action="" className="Signin-Form">
        <div className="Signin-Title">Sign in</div>
        <TextField
          id="outlined-email-input"
          label="Email"
          type="email"
          autoComplete="current-email"
          value={Email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          id="outlined-Password-input"
          label="Password"
          type="Password"
          autoComplete="current-Password"
          value={Password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleSignin}>Login in</button>
        <button onClick={() => navigate("/signup")}>Register</button>
      </form>
    </div>
  );
}

export default Signin;
