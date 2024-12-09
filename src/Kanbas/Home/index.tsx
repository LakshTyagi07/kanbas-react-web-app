import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";

function Home() {
  const navigate = useNavigate();
  const currentUser = useSelector((state: any) => state.userReducer.currentUser);

  useEffect(() => {
    // If no user is logged in, redirect to login
    if (!currentUser) {
      navigate("/Kanbas/Login");
      return;
    }

    // Only try to access role if we have a user
    if (currentUser.role === "FACULTY") {
      navigate("/Kanbas/Dashboard");
    } else if (currentUser.role === "STUDENT") {
      navigate("/Kanbas/Dashboard");
    }
  }, [currentUser, navigate]);

  // Return null while checking auth
  return null;
}

export default Home; 