import React from "react";


export default function ButtonClick({clickAumentar}) {
  return (
    <>
        <p>Component Button</p>
        <button onClick={clickAumentar}>Aumentar</button>
    </>
  );
}
