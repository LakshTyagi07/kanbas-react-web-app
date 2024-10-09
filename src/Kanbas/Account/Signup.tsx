import { Link } from "react-router-dom";
export default function Signin() {
  return (
    <div id="wd-signin-screen">
      <h1>Sign up</h1>
      <input
          id="wd-username"
          placeholder="username"
          className="form-control mb-3"
          style={{ width: "300px" }}
        />
        <input
          id="wd-password"
          placeholder="password"
          type="password"
          className="form-control mb-3"
          style={{ width: "300px" }}
        />
        <Link
          id="wd-signin-btn"
          to="/Kanbas/Account/Profile"
          className="btn btn-primary w-100 mb-3"
          style={{ width: "300px" }}
        >
          Signup
        </Link>
            <Link
            id="wd-signup-link"
            to="/Kanbas/Account/Signup"
            className="text-primary"
          >
            Signin
          </Link>
    </div>
);}
