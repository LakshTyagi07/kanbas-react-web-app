import { useParams, useNavigate } from "react-router";
import { BsGripVertical } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { deleteAssignment } from "./reducer";import "./index.css";

const Assignments = () => {
  const { cid } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Fetch assignments from Redux store
  const assignments = useSelector((state: any) => state.assignmentsReducer?.assignments || []);

  // Filter assignments by course ID
  const courseAssignments = assignments.filter((assignment: any) => assignment.course === cid);

  return (
    <div id="wd-assignments">
      {/* Assignments Header */}
      <div className="d-flex justify-content-between align-items-center bg-secondary p-3 mb-4">
        <div className="d-flex align-items-center">
          <BsGripVertical className="me-2 fs-4" />
          <h4 className="m-0">Assignments</h4>
        </div>
        {/* Button to add new assignment */}
        <button
          className="btn btn-danger"
          onClick={() => navigate(`/Kanbas/Courses/${cid}/Assignments/New`)}
        >
          + Assignment
        </button>
      </div>

      {/* Assignment List */}
      <ul className="list-group">
        {courseAssignments.map((assignment: any) => (
          <li
            key={assignment._id}
            className="list-group-item d-flex justify-content-between align-items-center mb-3"
          >
            <div>
              {/* Link to the assignment editor */}
              <a
                href={`#/Kanbas/Courses/${cid}/Assignments/${assignment._id}`}
                className="text-decoration-none fw-bold"
              >
                {assignment.title}
              </a>
              <p className="text-muted mb-1">
                <strong>Available From:</strong> {new Date(assignment.availableFromDate).toLocaleDateString()} | 
                <strong> Due:</strong> {new Date(assignment.dueDate).toLocaleDateString()} | 
                {assignment.points} pts
              </p>
            </div>

            {/* Delete Button */}
            <button
              className="btn btn-outline-danger"
              onClick={() => dispatch(deleteAssignment(assignment._id))}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Assignments;
