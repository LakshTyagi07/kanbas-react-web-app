import { useEffect, useState } from "react";
import { Navigate, Route, Routes, useParams, useLocation } from "react-router";
import { FaAlignJustify } from "react-icons/fa";
import CoursesNavigation from "./Navigation";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/Editor";
import PeopleTable from "./People/Table";
import { courses } from "../Database";

export default function Courses() {
  const { cid } = useParams()
  const { pathname } = useLocation()

  const [breadcrumb, setBreadcrumb] = useState("");

  const course = courses.find((course) => course._id === cid);

  useEffect(() => {
    const pathParts = pathname.split("/");
    const section = pathParts[4] || "Home"; 

    if (course) {
      setBreadcrumb(`${course.name} > ${section}`);
    } else {
      setBreadcrumb(section);
    }
  }, [pathname, course]); 
  return (
    <div id="wd-courses">
      <h2 className="text-danger">
        <FaAlignJustify className="me-3 fs-4 mb-1" />
        {breadcrumb}
      </h2>
      <hr />

      <div className="d-flex">
        {/* Sidebar Navigation */}
        <div className="d-none d-md-block">
          <CoursesNavigation />
        </div>

        <div className="flex-fill">
          <Routes>
            <Route path="Home" element={<Home />} />
            <Route path="Modules" element={<Modules />} />
            <Route path="Assignments" element={<Assignments />} />
            <Route path="Assignments/:aid" element={<AssignmentEditor />} />
            <Route path="People" element={<PeopleTable />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}
