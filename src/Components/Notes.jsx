import React, { useState, useEffect,useContext } from "react";
import supabase from "../supabase";
import { UserContext } from "../Context/UserProvider";

function Notes() {
  const [Data, setData] = useState("");
  const [Todos, setTodos] = useState([]);
  const { Username } = useContext(UserContext);

  const handleAdd = async () => {
    setTodos((prev) => [...prev, Data]);
    console.log(Todos);
  };

  const handleinsert = async () => {
    const { error } = await supabase
      .from("*")
      .update({ Data: Todos })
      .eq("Username", Username);

    console.log(error);
  };

  useEffect(() => {
    handleinsert();
  }, [Todos]);

  return (
    <>
      <input
        type="text"
        value={Data}
        onChange={(e) => setData(e.target.value)}
      />
      <button onClick={handleAdd}>Add</button>
    </>
  );
}

export default Notes;
