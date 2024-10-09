import { FaCheckCircle, FaGripVertical } from "react-icons/fa";
import { IoEllipsisVertical } from "react-icons/io5";
import { BiSearch } from "react-icons/bi"; // Import a search icon
import "bootstrap/dist/css/bootstrap.min.css";

export default function Assignments() {
  return (
    <>
      {/* Search and Button Container */}
      <div className="container-fluid mb-4">
        <div className="d-flex justify-content-between align-items-center">
          {/* Search Bar */}
          <div className="input-group w-50">
            <span className="input-group-text bg-white">
              <BiSearch className="text-muted" />
            </span>
            <input
              id="wd-search-assignment"
              className="form-control"
              placeholder="Search..."
            />
          </div>

          {/* Button Group */}
          <div>
            <button className="btn btn-light border me-2">+ Group</button>
            <button className="btn btn-danger text-white">+ Assignment</button>
          </div>
        </div>
      </div>

      {/* Assignments Section */}
      <div id="wd-assignments" className="container border rounded mt-3 p-3 bg-white">
        {/* Header Section */}
        <div className="d-flex justify-content-between align-items-center mb-3">
          <div className="d-flex align-items-center">
            <FaGripVertical className="me-2 fs-5" />
            <strong className="fs-4">ASSIGNMENTS</strong>
          </div>
          <span className="badge bg-light text-dark p-2">40% of Total</span>
          <IoEllipsisVertical className="fs-4" />
        </div>

        {/* Assignment List */}
        <ul id="wd-assignment-list" className="list-unstyled">
          {/* Assignment 1 */}
          <li className="wd-assignment-list-item border p-3 mb-3">
            <div className="d-flex justify-content-between align-items-center">
              {/* Left Icons and Title */}
              <div className="d-flex align-items-center">
                <FaGripVertical className="me-3 fs-4 text-secondary" /> {/* Centered Drag Handle */}
                <div>
                  <a
                    href="#/Kanbas/Courses/1234/Assignments/123"
                    className="fw-bold fs-5 mb-1 text-decoration-none"
                  >
                    A1
                  </a>
                  <div className="text-muted">
                    Multiple Modules | <strong>Not available until</strong> May 6 at 12:00am
                  </div>
                </div>
              </div>
              {/* Right Icons */}
              <div className="d-flex align-items-center">
                <FaCheckCircle className="text-success fs-4 me-3" /> {/* Centered Checkmark */}
                <IoEllipsisVertical className="fs-4 text-secondary" /> {/* Menu Dots Icon */}
              </div>
            </div>
            <div className="text-muted ps-5 mt-1">
              <strong>Due</strong> May 13 at 11:59pm | 100 pts
            </div>
          </li>

          {/* Assignment 2 */}
          <li className="wd-assignment-list-item border p-3 mb-3">
            <div className="d-flex justify-content-between align-items-center">
              <div className="d-flex align-items-center">
                <FaGripVertical className="me-3 fs-4 text-secondary" />
                <div>
                  <a
                    href="#/Kanbas/Courses/1234/Assignments/124"
                    className="fw-bold fs-5 mb-1 text-decoration-none"
                  >
                    A2
                  </a>
                  <div className="text-muted">
                    Multiple Modules | <strong>Not available until</strong> May 13 at 12:00am
                  </div>
                </div>
              </div>
              <div className="d-flex align-items-center">
                <FaCheckCircle className="text-success fs-4 me-3" />
                <IoEllipsisVertical className="fs-4 text-secondary" />
              </div>
            </div>
            <div className="text-muted ps-5 mt-1">
              <strong>Due</strong> May 20 at 11:59pm | 100 pts
            </div>
          </li>

          {/* Assignment 3 */}
          <li className="wd-assignment-list-item border p-3 mb-3">
            <div className="d-flex justify-content-between align-items-center">
              <div className="d-flex align-items-center">
                <FaGripVertical className="me-3 fs-4 text-secondary" />
                <div>
                  <a
                    href="#/Kanbas/Courses/1234/Assignments/125"
                    className="fw-bold fs-5 mb-1 text-decoration-none"
                  >
                    A3
                  </a>
                  <div className="text-muted">
                    Multiple Modules | <strong>Not available until</strong> May 20 at 12:00am
                  </div>
                </div>
              </div>
              <div className="d-flex align-items-center">
                <FaCheckCircle className="text-success fs-4 me-3" />
                <IoEllipsisVertical className="fs-4 text-secondary" />
              </div>
            </div>
            <div className="text-muted ps-5 mt-1">
              <strong>Due</strong> May 27 at 11:59pm | 100 pts
            </div>
          </li>
        </ul>
      </div>
    </>
  );
}