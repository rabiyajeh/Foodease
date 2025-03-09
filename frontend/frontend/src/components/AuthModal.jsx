import { useState } from "react";

export default function AuthModal({ isOpen, onClose, setIsAuthenticated }) {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleAuth = (e) => {
    e.preventDefault();

    if (isLogin) {
      // Simulate login
      localStorage.setItem("token", "userToken");
      setIsAuthenticated(true);
    } else {
      // Simulate signup
      localStorage.setItem("token", "userToken");
      localStorage.setItem("role", "user"); // Default role
      setIsAuthenticated(true);
    }

    onClose();
  };

  return (
    isOpen && (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
        <div className="bg-white p-6 rounded-lg shadow-lg w-96">
          <h2 className="text-xl font-bold text-center">{isLogin ? "Login" : "Sign Up"}</h2>
          <form onSubmit={handleAuth} className="mt-4">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 border rounded my-2"
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 border rounded my-2"
              required
            />
            <button type="submit" className="w-full bg-red-500 text-white p-2 rounded">
              {isLogin ? "Login" : "Sign Up"}
            </button>
          </form>
          <p className="text-center text-sm mt-3">
            {isLogin ? "New here?" : "Already have an account?"}
            <span className="text-blue-600 cursor-pointer" onClick={() => setIsLogin(!isLogin)}>
              {isLogin ? " Sign Up" : " Login"}
            </span>
          </p>
          <button onClick={onClose} className="w-full bg-gray-300 p-2 rounded mt-3">
            Close
          </button>
        </div>
      </div>
    )
  );
}
