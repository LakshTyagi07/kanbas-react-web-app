import { FaCheckCircle, FaGripVertical } from "react-icons/fa";
import { IoEllipsisVertical } from "react-icons/io5";
import { BiSearch } from "react-icons/bi"; // Import a search icon
import { useParams } from "react-router-dom"; // Import useParams to get the course ID from the URL
import assignmentsData from "../../Database/assignments.json"; // Assuming you have assignments data
import "bootstrap/dist/css/bootstrap.min.css";

export default function Assignments() {
  const { cid } = useParams<{ cid: string }>(); // Get the course ID from the URL

  // Filter assignments by the course ID (cid)
  const courseAssignments = assignmentsData.filter(assignment => assignment.course === cid);

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
          {courseAssignments.map(assignment => (
            <li key={assignment._id} className="wd-assignment-list-item border p-3 mb-3">
              <div className="d-flex justify-content-between align-items-center">
                {/* Left Icons and Title */}
                <div className="d-flex align-items-center">
                  <FaGripVertical className="me-3 fs-4 text-secondary" />
                  <div>
                    {/* Construct the correct URL dynamically using the course ID (cid) and assignment ID (aid) */}
                    <a href={`#/Kanbas/Courses/${cid}/Assignments/${assignment._id}/Editor`} className="fw-bold fs-5 mb-1 text-decoration-none">
  {assignment.title}
</a>
                    <div className="text-muted">
                      Multiple Modules | <strong>Available from:</strong> {new Date(assignment.availableFromDate).toLocaleDateString()}
                    </div>
                  </div>
                </div>
                {/* Right Icons */}
                <div className="d-flex align-items-center">
                  <FaCheckCircle className="text-success fs-4 me-3" />
                  <IoEllipsisVertical className="fs-4 text-secondary" />
                </div>
              </div>
              <div className="text-muted ps-5 mt-1">
                <strong>Due:</strong> {new Date(assignment.dueDate).toLocaleDateString()} | {assignment.points} pts
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}