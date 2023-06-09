import React, { useContext, useState } from "react";
import "../Style/Signup.css";
import supabase from "../supabase";
import { UserContext } from "../Context/UserProvider";
import TextField from "@mui/material/TextField";
import { useNavigate } from "react-router-dom";

function Signup() {
  const {
    Email,
    setEmail,
    Password,
    setPassword,
    Username,
    setUsername,
    User,
    setUser,
  } = useContext(UserContext);

  const Navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

    const { data, error } = await supabase.auth.signUp({
      email: Email,
      password: Password,
      options: {
        data: {
          username: Username,
        },
      },
    });
    console.log(error);

    setUser(data.user.id);

    const { Error } = await supabase
      .from("Notes")
      .insert({ Username: Username, Userid: User });

    if (error || Error) {
      alert(error.message);
      console.log(Error);
    } else {
      Navigate("/");
    }
  };
  return (
    <>
      <div className="Signup-Container">
        <form action="" className="Signup-Form">
          <div className="Signup-Title">Registration</div>
          <TextField
            id="outlined-email-input"
            label="Email"
            type="email"
            autoComplete="current-email"
            value={Email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            id="outlined-Username-input"
            label="Username"
            type="Username"
            autoComplete="current-Username"
            value={Username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <TextField
            id="outlined-Password-input"
            label="Password"
            type="Password"
            autoComplete="current-Password"
            value={Password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button onClick={handleRegister} type="submit">
            Register
          </button>
        </form>
      </div>
    </>
  );
}

export default Signup;
