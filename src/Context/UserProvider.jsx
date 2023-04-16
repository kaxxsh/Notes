import React, { useState, createContext, useEffect } from "react";
import supabase from "../supabase";
export const UserContext = createContext();

function Userprovider({ children }) {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [Username, setUsername] = useState("");
  const [User, setUser] = useState("");
  const [SessionCheck, setSessionCheck] = useState();

  const handlesession = async () => {
    const { data, error } = await supabase.auth.getSession();

    setUsername(data.session.user.user_metadata.username);
    setUser(data.session.user.id);
    console.log(error);
  };

  useEffect(() => {
    handlesession();
  }, []);

  return (
    <UserContext.Provider
      value={{
        User,
        setUser,
        Email,
        setEmail,
        Password,
        setPassword,
        SessionCheck,
        setSessionCheck,
        Username,
        setUsername,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

export default Userprovider;
