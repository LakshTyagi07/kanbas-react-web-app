import { Link, useParams, useLocation } from "react-router-dom";
import { courses } from "../Database"; // Import courses data from the database

export default function CoursesNavigation() {
  const { cid } = useParams();  // Get the current course ID from the URL
  const { pathname } = useLocation(); // Get the current pathname

  const links = ["Home", "Modules", "Piazza", "Zoom", "Assignments", "Quizzes", "Grades", "People"];

  // Find the course in the JSON data based on the courseId from useParams
  const course = courses.find((course) => course._id === cid);

  if (!course) {
    return <div>Course not found!</div>;  // Handle invalid course ID
  }

  return (
    <div id="wd-courses-navigation" className="wd list-group fs-5 rounded-0">
      {links.map((link) => {
        const linkPath = `/Kanbas/Courses/${cid}/${link}`;  // Dynamically build the link path with course ID
        const isActive = pathname.includes(link.toLowerCase());  // Check if the current link is active

        return (
          <Link
            key={link}
            to={linkPath}
            className={`list-group-item border border-0 ${isActive ? 'active text-white' : 'text-danger'}`}
          >
            {link}
          </Link>
        );
      })}
    </div>
  );
}