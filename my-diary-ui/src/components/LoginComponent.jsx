import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "./security/AuthContext";

export default function LoginComponent() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [failedMessage, setFailedMessage] = useState(false);
  const navigate = useNavigate();
  const authContext = useAuth();
  function usernameHandler(event) {
    setUsername(event.target.value);
  }

  function passwordHandler(event) {
    setPassword(event.target.value);
  }

  async function handleLogin() {
    if (await authContext.Login(username, password)) {
      navigate(`/welcome/${username}`);
    } else {
      setFailedMessage(true);
    }
  }

  return (
    <div className="loginComponent">
      <div>
        <label>User Name</label>
        <input
          type="text"
          name="username"
          value={username}
          onChange={usernameHandler}
          placeholder="Username"
        />
      </div>

      <div>
        <label>Password</label>
        <input
          type="password"
          name="password"
          value={password}
          onChange={passwordHandler}
          placeholder="password"
        />
      </div>

      <div className="loginButton">
        <button className="btn btn-success" type="button" name="login" onClick={handleLogin}>
          Login
        </button>
        <div className="failed m-3">
          {failedMessage && <div className="alert alert-warning">"Incorrect credentials please try again 🤨!"</div>}
        </div>
      </div>
    </div>
  );
}
