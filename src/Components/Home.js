import React from "react";
import { useParams, useSearchParams } from "react-router-dom";

export function Home() {
  let { id, id2 } = useParams();

  const [searchParams, setSearchParams] = useSearchParams();

  const s = searchParams.get("s");
  const d = searchParams.get("d");

  console.log("searchParams>>>>", searchParams);

  return (
    <>
      <h1>Home</h1>
      <br />
      <h2>ID = {id}</h2>
      <br />
      <h2>ID2 = {id2}</h2>

      <br />
      <h2>S = {s}</h2>
      <br />
      <h2>D = {d}</h2>
    </>
  );
}

export default Home;
