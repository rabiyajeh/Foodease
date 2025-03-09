import { useState } from "react";
import { loginUser } from "../api/api";
import { useNavigate } from "react-router-dom";

const Login = ({ setIsAuthenticated }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    const user = await loginUser({ email, password });
    if (user) {
      localStorage.setItem("token", user.token);
      localStorage.setItem("role", user.user.role); // Store role
      setIsAuthenticated(true);
      navigate("/menu");
    } else {
      alert("Invalid login credentials");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-bold">Login</h1>
      <input type="email" placeholder="Email" className="border p-2 mt-3" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="Password" className="border p-2 mt-3" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button className="mt-3 bg-blue-500 text-white px-4 py-2 rounded" onClick={handleLogin}>
        Login
      </button>
    </div>
  );
};

export default Login;
