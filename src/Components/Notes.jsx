import React, { useState, useEffect, useContext } from "react";
import supabase from "../supabase";
import { UserContext } from "../Context/UserProvider";
import { useNavigate } from "react-router-dom";

function Notes() {
  const [Data, setData] = useState("");
  const [Todos, setTodos] = useState([]);
  const { Username, User, SessionCheck } = useContext(UserContext);
  const Navigate = useNavigate();

  const handleAdd = async () => {
    setTodos((prev) => [...prev, Data]);
    console.log(Todos);

    const { error } = await supabase
      .from("Notes")
      .update({ data: Todos })
      .eq("Username", Username);

    console.log(error);
  };

  useEffect(() => {
    if (SessionCheck) {
      if (!User) {
        Navigate("/");
      }
    }
  }, [SessionCheck, User]);

  return (
    <>
      hi, welcome back {Username}
      <input
        type="text"
        value={Data}
        onChange={(e) => setData(e.target.value)}
      />
      <button onClick={handleAdd}>Add</button>
      {Todos.map((items) => items)}
    </>
  );
}

export default Notes;
