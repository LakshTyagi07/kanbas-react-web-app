import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Profile() {
  return (
    <div id="wd-profile-screen">
      <div className="w-25">
        <h1 className="mb-4 text-center">Profile</h1>

        <input
          id="wd-username"
          value="alice"
          placeholder="username"
          className="form-control mb-3"
          style={{ height: "45px", width: "300px" }}
        />
        <input
          id="wd-password"
          value="123"
          placeholder="password"
          type="password"
          className="form-control mb-3"
          style={{ height: "45px", width: "300px" }}
        />
        <input
          id="wd-firstname"
          value="Alice"
          placeholder="First Name"
          className="form-control mb-3"
          style={{ height: "45px", width: "300px" }}
        />
        <input
          id="wd-lastname"
          value="Wonderland"
          placeholder="Last Name"
          className="form-control mb-3"
          style={{ height: "45px", width: "300px" }}
        />
        <input
          id="wd-dob"
          value="mm/dd/yyyy"
          placeholder="mm/dd/yyyy"
          type="text"
          className="form-control mb-3"
          style={{ height: "45px", width: "300px" }}
        />
        <input
          id="wd-email"
          value="alice@wonderland.com"
          type="email"
          className="form-control mb-3"
          style={{ height: "45px", width: "300px" }}
        />
        <input
          id="wd-role"
          value="User"
          className="form-control mb-4 w-300"
          style={{ height: "45px", width: "300px" }}
          disabled
        />

        {/* Signout Button */}
        <Link
          to="/Kanbas/Account/Signin"
          className="btn btn-danger w-300"
          style={{ height: "45px", width: "300px" }}
        >
          Signout
        </Link>
      </div>
    </div>
  );
}
