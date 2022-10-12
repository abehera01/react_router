import { useState } from "react/cjs/react.production.min";

export const Login = () => {
  const [user, setUser] = useState("");
  const handleLogin = () => {};
  return (
    <div>
      <label>
        Username:{" "}
        <input type="text" onChange={(e) => setUser(e.target.value)} />
      </label>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};
