import React, { useState, useEffect, useContext } from "react";
import supabase from "../supabase";
import { UserContext } from "../Context/UserProvider";
import { useNavigate } from "react-router-dom";

function Notes() {
  const [Text, setText] = useState("");
  const [Todos, setTodos] = useState([]);
  const { User, Username, SessionCheck } = useContext(UserContext);
  const Navigate = useNavigate();

  const handleAdd = () => {
    if (Text === "") {
      console.log("no data");
    } else {
      setTodos((prev) => [...prev, Text]);
      setText("");
    }
  };

  const handleupdate = async () => {
    const { error } = await supabase
      .from("Notes")
      .update({ data: Todos })
      .eq("Userid", User);
  };

  const handlefetch = async () => {
    const { data } = await supabase
      .from("Notes")
      .select("*")
      .eq("Userid", User);
    setTodos(data[0].data);
  };

  const handledelete = (i) => {
    setTodos(Todos.filter((item, index) => index != i));
  };

  useEffect(() => {
    if (User) handlefetch();
  }, [User]);

  useEffect(() => {
    if (Todos.length) handleupdate();
  }, [Todos]);

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
        value={Text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={handleAdd}>Add</button>
      {Todos?.map((items, i) => (
        <div className="" key={i}>
          <div>{items}</div>
          <button onClick={() => handledelete(i)}>delete</button>
        </div>
      ))}
    </>
  );
}

export default Notes;
