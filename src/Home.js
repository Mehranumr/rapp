import { createContext } from "react";
import "./App.css";
import { UserProvider } from "./Context/UserContext";
import Login from "./Components/Login";
function Home() {
  return (
    <UserProvider>
      <Login />
    </UserProvider>
  );
}

export default Home;
