import { Link } from "react-router-dom";

export default function Dashboard() {
  return (
    <table>
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
      <div id="wd-dashboard-courses">
        <tr>
        <div className="wd-dashboard-course">
          <Link
            className="wd-dashboard-course-link"
            to="/Kanbas/Courses/1234/Home">
            <img src="images/React_Native_Logo.png" width={200} />
            <div>
              <h5>CS1234 React JS</h5>
              <p className="wd-dashboard-course-title">
                Full Stack software developer
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        </tr>
        <div className="wd-dashboard-course">
          <Link
            className="wd-dashboard-course-link"
            to="/Kanbas/Courses/1234/Home"
          >
            <img src="images/source-g0d609dba2_1920.jpg" width={200} />
            <div>
              <h5>CS2000 Fundies 1</h5>
              <p className="wd-dashboard-course-title">Fundies 1</p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link
            className="wd-dashboard-course-link"
            to="/Kanbas/Courses/1234/Home"
          >
            <img src="images/image.png" width={200} />
            <div>
              <h5>CS2500</h5>
              <p className="wd-dashboard-course-title">Fundies 2</p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link
            className="wd-dashboard-course-link"
            to="/Kanbas/Courses/1234/Home"
          >
            <img src="images/marketing.png" width={200} />
            <div>
              <h5>MR1000</h5>
              <p className="wd-dashboard-course-title">Intro to Marketing</p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link
            className="wd-dashboard-course-link"
            to="/Kanbas/Courses/1234/Home"
          >
            <img src="images/Design.png" width={200} />
            <div>
              <h5>ARTG1000</h5>
              <p className="wd-dashboard-course-title">Design Fundamentals</p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link
            className="wd-dashboard-course-link"
            to="/Kanbas/Courses/1234/Home"
          >
            <img src="images/Design System.png" width={200} />
            <div>
              <h5>ARTG3000</h5>
              <p className="wd-dashboard-course-title">Design Systems</p>
              <button> Go </button>
            </div>
          </Link>
        </div>        
      </div>
      <div className="wd-dashboard-course">
          <Link
            className="wd-dashboard-course-link"
            to="/Kanbas/Courses/1234/Home"
          >
            <img src="images/Writing.png" width={200} />
            <div>
              <h5>ENG3000</h5>
              <p className="wd-dashboard-course-title">Advanced Writing</p>
              <button> Go </button>
            </div>
          </Link>
        </div>        
      </div>
    </table>
  );
}
