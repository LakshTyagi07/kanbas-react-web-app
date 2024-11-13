import { useState } from "react";
import { useNavigate, useParams } from "react-router";
import { useDispatch } from "react-redux";
import { addAssignment } from "./reducer";

export default function AssignmentEditor() {
  const { cid } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [assignment, setAssignment] = useState({
    title: "",
    description: "",
    points: 0,
    dueDate: "",
    availableFromDate: "",
    availableUntilDate: "",
  });

  const handleSave = () => {
    const newAssignment = {
      ...assignment,
      _id: new Date().getTime().toString(),
      course: cid,
    };
    dispatch(addAssignment(newAssignment));
    navigate(`/Kanbas/Courses/${cid}/Assignments`);
  };

  const handleCancel = () => {
    navigate(`/Kanbas/Courses/${cid}/Assignments`);
  };

  return (
    <div className="container" id="wd-assignments-editor">
      <h3>Assignment Name</h3>
      <input
        className="form-control mb-2"
        placeholder="Enter assignment name"
        value={assignment.title}
        onChange={(e) => setAssignment({ ...assignment, title: e.target.value })}
      />

      <textarea
        className="form-control mb-4"
        rows={5}
        placeholder="Enter assignment description"
        value={assignment.description}
        onChange={(e) => setAssignment({ ...assignment, description: e.target.value })}
      />

      <input
        className="form-control mb-2"
        type="number"
        placeholder="Points"
        value={assignment.points}
        onChange={(e) => setAssignment({ ...assignment, points: parseInt(e.target.value) })}
      />

      <div className="mb-3">
        <label>Due Date</label>
        <input
          className="form-control"
          type="datetime-local"
          value={assignment.dueDate}
          onChange={(e) => setAssignment({ ...assignment, dueDate: e.target.value })}
        />
      </div>

      <div className="mb-3">
        <label>Available From</label>
        <input
          className="form-control"
          type="datetime-local"
          value={assignment.availableFromDate}
          onChange={(e) => setAssignment({ ...assignment, availableFromDate: e.target.value })}
        />
      </div>

      <div className="mb-3">
        <label>Available Until</label>
        <input
          className="form-control"
          type="datetime-local"
          value={assignment.availableUntilDate}
          onChange={(e) => setAssignment({ ...assignment, availableUntilDate: e.target.value })}
        />
      </div>

      <div className="d-flex justify-content-end">
        <button className="btn btn-secondary me-2" onClick={handleCancel}>
          Cancel
        </button>
        <button className="btn btn-danger" onClick={handleSave}>
          Save
        </button>
      </div>
    </div>
  );
}
