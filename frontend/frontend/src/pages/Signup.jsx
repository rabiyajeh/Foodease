import { useState } from "react";
import { registerUser } from "../api/api";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignup = async () => {
    const newUser = await registerUser({ name, email, password });
    if (newUser) {
      alert("Signup successful! Redirecting to login...");
      navigate("/login");
    } else {
      alert("Signup failed. Try again.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-bold">Sign Up</h1>
      <input type="text" placeholder="Name" className="border p-2 mt-3" value={name} onChange={(e) => setName(e.target.value)} />
      <input type="email" placeholder="Email" className="border p-2 mt-3" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="Password" className="border p-2 mt-3" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button className="mt-3 bg-green-500 text-white px-4 py-2 rounded" onClick={handleSignup}>
        Sign Up
      </button>
    </div>
  );
};

export default Signup;
