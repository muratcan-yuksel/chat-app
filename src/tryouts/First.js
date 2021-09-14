import React, { useState } from "react";

const First = () => {
  const [state, setState] = useState("I'll change");

  const eventHandler = () => {
    setState("told ya");
  };
  return (
    <div>
      <h4 title="h4">Lolz</h4>
      <button onClick={eventHandler} title="buton">
        Click here
      </button>
      <p title="para">{state}</p>
    </div>
  );
};

export default First;
