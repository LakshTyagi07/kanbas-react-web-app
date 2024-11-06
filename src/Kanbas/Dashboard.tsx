import { Link } from "react-router-dom";
import React, { useState } from "react";
import * as db from "./Database";

export default function Dashboard() {
  const [courses, setCourses] = useState<any[]>(db.courses);
  const [course, setCourse] = useState<any>({
    _id: "0",
    name: "New Course",
    number: "New Number",
    startDate: "2023-09-10",
    endDate: "2023-12-15",
    image: "/images/reactjs.jpg",
    description: "New Description",
  });
  const addNewCourse = () => {
    const newCourse = { ...course, _id: new Date().getTime().toString() };
    setCourses([...courses, newCourse]);
  };
  const deleteCourse = (courseId: string) => {
    setCourses(courses.filter((course) => course._id !== courseId));
  };
  const updateCourse = () => {
    setCourses(
      courses.map((c) => {
        if (c._id === course._id) {
          return course;
        } else {
          return c;
        }
      })
    );
  };
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h5>
        New Course
        <button
          className="btn btn-primary float-end"
          id="wd-add-new-course-click"
          onClick={addNewCourse}
        >
          {" "}
          Add{" "}
        </button>
      </h5>
      <hr />
      <br />
      <input
        value={course.name}
        className="form-control mb-2"
        onChange={(e) => setCourse({ ...course, name: e.target.value })}
      />
      <textarea
        value={course.description}
        className="form-control"
        onChange={(e) => setCourse({ ...course, description: e.target.value })}
      />
      <h2 id="wd-dashboard-published">Published Courses ({courses.length})</h2>{" "}
      <hr />
      <div id="wd-dashboard-courses" className="row">
        <div className="row row-cols-1 row-cols-md-5 g-4">
          {courses.map((course) => (
            <div className="wd-dashboard-course col" style={{ width: "300px" }}>
              <div className="card rounded-3 overflow-hidden">
                <Link
                  to={`/Kanbas/Courses/${course._id}/Home`}
                  className="wd-dashboard-course-link text-decoration-none text-dark"
                >
                  <img src="/images/reactjs.jpg" width="100%" height={160} />
                  <div className="card-body">
                    <h5 className="wd-dashboard-course-title card-title">
                      {course.name}{" "}
                    </h5>
                    <p
                      className="wd-dashboard-course-title card-text overflow-y-hidden"
                      style={{ maxHeight: 100 }}
                    >
                      {course.description}{" "}
                    </p>
                    <button className="btn btn-primary"> Go </button>
                    <button
                      onClick={(event) => {
                        event.preventDefault();
                        deleteCourse(course._id);
                      }}
                      className="btn btn-danger float-end"
                      id="wd-delete-course-click"
                    >
                      Delete
                    </button>
                    <button
                      className="btn btn-warning float-end me-2"
                      onClick={updateCourse}
                      id="wd-update-course-click"
                    >
                      Update
                    </button>
                  </div>
                </Link>
              </div>
            </div>
          ))}
          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
            <div className="card rounded-3 overflow-hidden">
              <Link
                className="wd-dashboard-course-link text-decoration-none text-dark"
                to={`/Kanbas/Courses/C2000/Home`}
              >
                <img
                  src="images/source-g0d609dba2_1920.jpg"
                  width="100%"
                  height={160}
                />
                <div className="card-body">
                  <h5 className="wd-dashboard-course-title card-title">
                    CS2000 Fundies 1
                  </h5>
                  <p className="wd-dashboard-course-title card-text">
                    Fundies 1
                  </p>
                  <button className="btn btn-primary"> Go </button>
                </div>
              </Link>
            </div>
          </div>

          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
            <div className="card rounded-3 overflow-hidden">
              <Link
                className="wd-dashboard-course-link text-decoration-none text-dark"
                to={`/Kanbas/Courses/C2500/Home`}
              >
                <img src="images/image.png" width="100%" height={160} />
                <div className="card-body">
                  <h5 className="wd-dashboard-course-title card-title">
                    CS2500
                  </h5>
                  <p className="wd-dashboard-course-title card-text">
                    Fundies 2
                  </p>
                  <button className="btn btn-primary"> Go </button>
                </div>
              </Link>
            </div>
          </div>

          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
            <div className="card rounded-3 overflow-hidden">
              <Link
                className="wd-dashboard-course-link text-decoration-none text-dark"
                to={`/Kanbas/Courses/M1000/Home`}
              >
                <img src="images/marketing.png" width="100%" height={160} />
                <div className="card-body">
                  <h5 className="wd-dashboard-course-title card-title">
                    MR1000
                  </h5>
                  <p className="wd-dashboard-course-title card-text">
                    Intro to Marketing
                  </p>
                  <button className="btn btn-primary"> Go </button>
                </div>
              </Link>
            </div>
          </div>

          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
            <div className="card rounded-3 overflow-hidden">
              <Link
                className="wd-dashboard-course-link text-decoration-none text-dark"
                to={`/Kanbas/Courses/A1000/Home`}
              >
                <img src="images/Design.png" width="100%" height={160} />
                <div className="card-body">
                  <h5 className="wd-dashboard-course-title card-title">
                    ARTG1000
                  </h5>
                  <p className="wd-dashboard-course-title card-text">
                    Design Fundamentals
                  </p>
                  <button className="btn btn-primary"> Go </button>
                </div>
              </Link>
            </div>
          </div>

          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
            <div className="card rounded-3 overflow-hidden">
              <Link
                className="wd-dashboard-course-link text-decoration-none text-dark"
                to={`/Kanbas/Courses/A3000/Home`}
              >
                <img src="images/Design System.png" width="100%" height={160} />
                <div className="card-body">
                  <h5 className="wd-dashboard-course-title card-title">
                    ARTG3000
                  </h5>
                  <p className="wd-dashboard-course-title card-text">
                    Design Systems
                  </p>
                  <button className="btn btn-primary"> Go </button>
                </div>
              </Link>
            </div>
          </div>

          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
            <div className="card rounded-3 overflow-hidden">
              <Link
                className="wd-dashboard-course-link text-decoration-none text-dark"
                to={`/Kanbas/Courses/E3000/Home`}
              >
                <img src="images/Writing.png" width="100%" height={160} />
                <div className="card-body">
                  <h5 className="wd-dashboard-course-title card-title">
                    ENG3000
                  </h5>
                  <p className="wd-dashboard-course-title card-text">
                    Advanced Writing
                  </p>
                  <button className="btn btn-primary"> Go </button>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
