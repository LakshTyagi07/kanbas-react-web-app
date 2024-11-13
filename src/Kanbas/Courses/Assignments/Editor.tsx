import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { addAssignment, updateAssignment } from "./reducer";

const AssignmentEditor = () => {
  const { cid, aid } = useParams(); // Get course ID and assignment ID from URL
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Fetch assignments from the Redux store
  const assignments = useSelector((state: any) => state.assignmentReducer?.assignments || []);
  
  // Find the assignment if the user is editing an existing one
  const existingAssignment = assignments.find((a: any) => a._id === aid);

  // State for the assignment form
  const [assignment, setAssignment] = useState({
    title: "",
    description: "",
    points: 0,
    dueDate: "",
    availableFromDate: "",
    availableUntilDate: "",
  });

  // Load existing assignment details if editing
  useEffect(() => {
    if (existingAssignment) {
      setAssignment({
        title: existingAssignment.title,
        description: existingAssignment.description,
        points: existingAssignment.points,
        dueDate: existingAssignment.dueDate,
        availableFromDate: existingAssignment.availableFromDate,
        availableUntilDate: existingAssignment.availableUntilDate,
      });
    }
  }, [existingAssignment]);

  // Handle saving the assignment
  const handleSave = () => {
    if (!assignment.title.trim()) {
      alert("Assignment title is required");
      return;
    }

    const updatedAssignment = {
      ...assignment,
      _id: existingAssignment ? existingAssignment._id : new Date().getTime().toString(),
      course: cid,
    };

    if (existingAssignment) {
      // Update existing assignment
      dispatch(updateAssignment(updatedAssignment));
    } else {
      // Add new assignment
      dispatch(addAssignment(updatedAssignment));
    }

    navigate(`/Kanbas/Courses/${cid}/Assignments`);
  };

  // Handle canceling the form
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
};

export default AssignmentEditor;
