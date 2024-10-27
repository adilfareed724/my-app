import React, { useState } from "react";

export default function Foam() {
  const [Name, setName] = useState("");
  return (
    <>
      <form>
        Enter your name <br />
        <input
          onChange={(e) => setName(e.target.value)}
          type="text"
          name="username"
        />
        <h6>my name is {Name} </h6>
      </form>
    </>
  );
}
