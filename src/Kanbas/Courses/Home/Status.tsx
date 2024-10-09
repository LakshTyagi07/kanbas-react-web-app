import { MdDoNotDisturbAlt } from "react-icons/md"; // Unpublish icon
import { FaCheckCircle, FaBullhorn, FaChartBar, FaBell } from "react-icons/fa"; // Icons for various actions
import { BiImport } from "react-icons/bi"; // Import existing content
import { LiaFileImportSolid } from "react-icons/lia"; // Import from Commons
import { AiOutlineHome, AiOutlineEye } from "react-icons/ai"; // Home page and View screen icons
import "bootstrap/dist/css/bootstrap.min.css";

export default function CourseStatus() {
  return (
    <div id="wd-course-status" style={{ width: "300px" }} className="p-3">
      <h2>Course Status</h2>

      {/* Unpublish and Publish Buttons */}
      <div className="d-flex mb-4">
        <div className="w-50 pe-1">
          <button className="btn btn-lg btn-secondary w-100 text-nowrap">
            <MdDoNotDisturbAlt className="me-2 fs-5" /> Unpublish
          </button>
        </div>
        <div className="w-50">
          <button className="btn btn-lg btn-success w-100">
            <FaCheckCircle className="me-2 fs-5" /> Publish
          </button>
        </div>
      </div>

      {/* Full-width buttons for each action */}
      <button className="btn btn-lg btn-secondary w-100 mt-1 text-start">
        <BiImport className="me-2 fs-5" /> Import Existing Content
      </button>
      <button className="btn btn-lg btn-secondary w-100 mt-1 text-start">
        <LiaFileImportSolid className="me-2 fs-5" /> Import from Commons
      </button>
      <button className="btn btn-lg btn-secondary w-100 mt-1 text-start">
        <AiOutlineHome className="me-2 fs-5" /> Choose Home Page
      </button>
      <button className="btn btn-lg btn-secondary w-100 mt-1 text-start">
        <AiOutlineEye className="me-2 fs-5" /> View Course Screen
      </button>
      <button className="btn btn-lg btn-secondary w-100 mt-1 text-start">
        <FaBullhorn className="me-2 fs-5" /> New Announcement
      </button>
      <button className="btn btn-lg btn-secondary w-100 mt-1 text-start">
        <FaChartBar className="me-2 fs-5" /> New Analytics
      </button>
      <button className="btn btn-lg btn-secondary w-100 mt-1 text-start">
        <FaBell className="me-2 fs-5" /> View Course Notifications
      </button>
    </div>
  );
}