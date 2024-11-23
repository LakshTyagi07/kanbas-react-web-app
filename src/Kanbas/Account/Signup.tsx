import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import * as client from "./client";
import { useDispatch } from "react-redux";
import { setCurrentUser } from "./reducer";

export default function Signup() {
    const [user, setUser] = useState<any>({
        username: "",
        password: "",
        firstName: "",
        lastName: "",
    });
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const signup = async () => {
        try {
            const currentUser = await client.signup(user);
            dispatch(setCurrentUser(currentUser));
            navigate("/Kanbas/Account/Profile");
        } catch (err: any) {
            console.log(err);
        }
    };

    return (
        <div className="wd-signup-screen" style={{ width: "400px" }}>
            <h1>Sign up</h1>
            <input
                value={user.firstName}
                onChange={(e) => setUser({ ...user, firstName: e.target.value })}
                className="form-control mb-2"
                placeholder="First Name"
            />
            <input
                value={user.lastName}
                onChange={(e) => setUser({ ...user, lastName: e.target.value })}
                className="form-control mb-2"
                placeholder="Last Name"
            />
            <input
                value={user.username}
                onChange={(e) => setUser({ ...user, username: e.target.value })}
                className="form-control mb-2"
                placeholder="Username"
            />
            <input
                value={user.password}
                onChange={(e) => setUser({ ...user, password: e.target.value })}
                type="password"
                className="form-control mb-2"
                placeholder="Password"
            />
            <button
                onClick={signup}
                className="btn btn-primary w-100 mb-2"
            >
                Sign up
            </button>
            <Link to="/Kanbas/Account/Signin">
                Sign in
            </Link>
        </div>
    );
}