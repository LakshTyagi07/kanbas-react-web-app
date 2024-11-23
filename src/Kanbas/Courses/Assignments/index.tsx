import { useEffect } from "react";
import { useParams, useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import * as client from "./client";
import { setAssignments, deleteAssignment } from "./reducer";
import "./index.css";

const Assignments = () => {
  const navigate = useNavigate();
  const { courseId } = useParams();
  const dispatch = useDispatch();
  const assignments = useSelector((state: any) => 
    state.assignmentsReducer.assignments);

  const fetchAssignments = async () => {
    if (courseId) {
      const assignments = await client.findAssignmentsForCourse(courseId);
      dispatch(setAssignments(assignments));
    }
  };

  const handleDeleteAssignment = async (assignmentId: string) => {
    await client.deleteAssignment(assignmentId);
    dispatch(deleteAssignment(assignmentId));
  };

  useEffect(() => {
    fetchAssignments();
  }, [courseId]);

  return (
    <div id="wd-assignments">
      <div className="d-flex justify-content-between align-items-center bg-secondary p-3 mb-4">
        <div className="d-flex align-items-center">
          <h4 className="m-0">Assignments</h4>
        </div>
        <button
          className="btn btn-danger"
          onClick={() => navigate(`/Kanbas/Courses/${courseId}/Assignments/New`)}
        >
          + Assignment
        </button>
      </div>

      <ul className="list-group">
        {assignments.map((assignment: any) => (
          <li key={assignment._id} className="list-group-item d-flex justify-content-between align-items-center mb-3">
            <div>
              <a href={`#/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`} className="text-decoration-none fw-bold">
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
              onClick={() => handleDeleteAssignment(assignment._id)}
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
