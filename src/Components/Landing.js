import React from "react";
import { Link } from "react-router-dom";

export function Landing() {
  const id = 123;
  const id2 = 444;

  return (
    <>
      <h1>Landing</h1>
      <Link to="/">Landing</Link>
      <br />
      <Link to={`/home/${id}/${id2}?s=9999&d=0000`}>Home</Link>
      <br />
      <Link to="/login">Login</Link>
      <br />
    </>
  );
}

export default Landing;
