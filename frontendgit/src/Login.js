// import React, { useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// const Login = ({ setIsLoggedIn }) => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate();

//   const handleLogin = () => {
//     axios
//       .post("http://localhost:8080/api/auth/login", { email, password })
//       .then((res) => {
//         const token = res.data.jwt;
//         localStorage.setItem("token", token);
//         setIsLoggedIn(true); // Update the login state
//         alert("Logged in successfully!");
//         navigate("/"); // Redirect to dashboard after successful login
//       })
//       .catch((err) => {
//         console.log(err);
//         alert("Login failed, please try again.");
//       });
//   };

//   return (
//     <div>
//       <h1>Login</h1>
//       <input
//         type="text"
//         placeholder="Email"
//         onChange={(e) => setEmail(e.target.value)}
//       />
//       <input
//         type="password"
//         placeholder="Password"
//         onChange={(e) => setPassword(e.target.value)}
//       />
//       <button onClick={handleLogin}>Login</button>
//     </div>
//   );
// };

// export default Login;


import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    const data = { email, password };
    axios
      .post("http://localhost:8080/api/auth/login", data)
      .then((response) => {
        const token = response.data.jwt;
        localStorage.setItem("token", token);
        alert("Login successful");
        navigate("/dashboard"); 
      })
      .catch((err) => console.log("Login Error:", err));
  };

  return (
    <div>
      <h2>Login</h2>
      <input
        type="email"
        placeholder="Enter Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Enter Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
