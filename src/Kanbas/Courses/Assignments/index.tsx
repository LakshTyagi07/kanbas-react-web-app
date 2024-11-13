import { useState } from "react";
import { useParams, useNavigate } from "react-router";
import { BsGripVertical, BsTrash } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { deleteAssignment } from "./reducer";
import "./index.css";

const Assignments = () => {
  const { cid } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const assignments = useSelector((state: any) => state.assignmentReducer?.assignments || []);
  const courseAssignments = assignments.filter((assignment: any) => assignment.course === cid);

  const [showConfirm, setShowConfirm] = useState(false);
  const [selectedAssignment, setSelectedAssignment] = useState<string | null>(null);

  const handleDeleteClick = (assignmentId: string) => {
    setSelectedAssignment(assignmentId);
    setShowConfirm(true);
  };

  const confirmDelete = () => {
    if (selectedAssignment) {
      dispatch(deleteAssignment(selectedAssignment));
      setSelectedAssignment(null);
    }
    setShowConfirm(false);
  };

  const cancelDelete = () => {
    setSelectedAssignment(null);
    setShowConfirm(false);
  };

  return (
    <div id="wd-assignments">
      <div className="d-flex justify-content-between align-items-center bg-secondary p-3 mb-4">
        <div className="d-flex align-items-center">
          <BsGripVertical className="me-2 fs-4" />
          <h4 className="m-0">Assignments</h4>
        </div>
        <button
          className="btn btn-danger"
          onClick={() => navigate(`/Kanbas/Courses/${cid}/Assignments/New`)}
        >
          + Assignment
        </button>
      </div>

      <ul className="list-group">
        {courseAssignments.map((assignment: any) => (
          <li key={assignment._id} className="list-group-item d-flex justify-content-between align-items-center mb-3">
            <div>
              <a href={`#/Kanbas/Courses/${cid}/Assignments/${assignment._id}`} className="text-decoration-none fw-bold">
                {assignment.title}
              </a>
              <p className="text-muted mb-1">
                <strong>Available From:</strong> {new Date(assignment.availableFromDate).toLocaleDateString()} | 
                <strong> Due:</strong> {new Date(assignment.dueDate).toLocaleDateString()} | 
                {assignment.points} pts
              </p>
            </div>
            <button
              className="btn btn-outline-danger"
              onClick={() => handleDeleteClick(assignment._id)}
            >
              <BsTrash />
            </button>
          </li>
        ))}
      </ul>

      {showConfirm && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h5>Are you sure you want to delete this assignment?</h5>
            <div className="d-flex justify-content-end mt-4">
              <button className="btn btn-secondary me-2" onClick={cancelDelete}>
                Cancel
              </button>
              <button className="btn btn-danger" onClick={confirmDelete}>
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Assignments;
