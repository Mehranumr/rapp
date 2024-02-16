import { useEffect, useState } from "react";
import "./Content.css";

function Content() {
  const [counter, setCounter] = useState(0);
  const [doubleCounter, setDoubleCounter] = useState(1);

  useEffect(() => {
    let a = counter * 2;
    setDoubleCounter(a);
  }, [counter]);

  useEffect(() => {
    setCounter(0);
    setDoubleCounter(1);
  }, []);

  const handleOnClick = (n) => {
    console.log("clicked");
    setCounter((s) => s + n);
  };

  return (
    <>
      <span>Counter = {counter}</span>
      <br></br>
      <br></br>
      <span>Double Counter = {doubleCounter}</span>

      <br></br>
      <br></br>
      <button onClick={() => handleOnClick(1)}>Increase</button>
      <br></br>
      <br></br>
      <button onClick={() => handleOnClick(-1)}>Decrease</button>
    </>
  );
}

export default Content;
