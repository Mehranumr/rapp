import { useId } from "react";
import { useAuth } from "../Context/UserContext";
import { v4 as uuidv4 } from "uuid";

export function Login() {
  const tokenID = uuidv4();

  const { login, logout, updateUserName, userName, isLoggedIn, token } =
    useAuth();

  const handleLogin = () => {
    login(tokenID);
  };

  const handleUpdate = () => {
    const username = "Mehran";
    updateUserName(username);
  };

  const handleLogout = () => {
    logout();
  };

  return (
    <>
      <h1>Hello User</h1>

      <h2>{userName}</h2>

      <h2>{isLoggedIn ? "Logged In" : "Logged Out"}</h2>

      <h2>{token}</h2>

      <button onClick={handleLogin}>Login</button>

      <button onClick={handleLogout}>Logout</button>

      <button onClick={handleUpdate}>Update User Name</button>
    </>
  );
}

export default Login;
