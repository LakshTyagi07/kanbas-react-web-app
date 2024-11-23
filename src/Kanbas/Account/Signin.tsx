import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import * as client from "./client";
import { setCurrentUser } from "./reducer";

const Signin = () => {
  const [credentials, setCredentials] = useState<any>({
    username: "",
    password: "",
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const signin = async () => {
    try {
      const user = await client.signin(credentials);
      if (!user) return;
      dispatch(setCurrentUser(user));
      navigate("/Kanbas/Dashboard");
    } catch (error) {
      console.log(error);
    }
  };
  
  return (
    <div id="wd-signin-screen" style={{ width: "400px" }}>
      <h1>Sign In</h1>
      <input
        type="text"
        id="wd-username"
        placeholder="Username"
        className="form-control mb-2"
        value={credentials.username}  // Changed from defaultValue to value
        onChange={(e) => setCredentials({ 
          ...credentials, 
          username: e.target.value 
        })}
      />
      <input
        type="password"
        id="wd-password"
        placeholder="Password"
        className="form-control mb-2"
        value={credentials.password}  // Changed from defaultValue to value
        onChange={(e) => setCredentials({ 
          ...credentials, 
          password: e.target.value 
        })}
      />
      <button
        id="wd-signin-btn"
        className="btn btn-primary w-100 mb-2"
        onClick={signin}
      >
        Sign in
      </button>
      <Link
        id="wd-signup-link"
        to="/Kanbas/Account/Signup"
      >
        Sign up
      </Link>
    </div>
  );
};

export default Signin;