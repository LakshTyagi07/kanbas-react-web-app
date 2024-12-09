import { Link, useLocation } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { useSelector } from "react-redux";

export default function AccountNavigation() {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const links = currentUser ? ["Profile"] : ["Signin", "Signup"];
  const active = (path: string) => (pathname.includes(path) ? "active" : "");
  const { pathname } = useLocation();
  return (
    <div id="wd-account-navigation" className="list-group wd fs-5 rounded-0">
      <Link
        to="/Kanbas/Account/Signin"
        id="wd-account-signin-link"
        className="list-group-item active border border-0"
      >
        Signin
      </Link>
      <Link
        to="/Kanbas/Account/Signup"
        id="wd-account-signup-link"
        className="list-group-item text-danger border border-0"
      >
        Signup
      </Link>
      <Link
        to="/Kanbas/Account/Profile"
        id="wd-account-profile-link"
        className="list-group-item text-danger border border-0"
      >
        Profile
      </Link>
      {currentUser && currentUser.role === "ADMIN" && (
        <Link
          id="wd-account-users-link"
          className={`list-group-item ${active('Users')} border border-0`}
          to="/Kanbas/Account/Users"
        >
          Users
        </Link>
      )}
    </div>
  );
}