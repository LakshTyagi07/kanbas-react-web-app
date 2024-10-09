import { FaPlus, FaTimes, FaSave } from "react-icons/fa";
import { BiSearch } from "react-icons/bi";
import "bootstrap/dist/css/bootstrap.min.css";

export default function AssignmentEditor() {
  return (
    <div className="container mt-4">
      <div id="wd-assignments-editor" className="border p-4 bg-white rounded">
        <h3 className="mb-3">Assignment Name</h3>
        <input
          id="wd-name"
          value="A1 - ENV + HTML"
          className="form-control mb-3"
        />

        <h4 className="mb-3">Description</h4>
        <textarea
          id="wd-description"
          className="form-control mb-4"
     >
          The assignment is available online. Submit a link to the landing page of your Web application running on Netlify. The landing page should include the following:
          - Your full name and section
          - Links to each of the lab assignments
          - Link to the Kanbas application
          - Links to all relevant source code repositories
          The Kanbas application should include a link to navigate back to the landing page.
        </textarea>

        <div className="row">
          {/* Points */}
          <div className="col-md-6 mb-3">
            <label htmlFor="wd-points" className="form-label">Points</label>
            <input id="wd-points" value={100} className="form-control" />
          </div>

          <div className="col-md-6 mb-3">
            <label htmlFor="wd-group" className="form-label">Assignment Group</label>
            <select id="wd-group" className="form-select">
              <option value="VAL1">ASSIGNMENTS</option>
            </select>
          </div>

          <div className="col-md-6 mb-3">
            <label htmlFor="wd-display-grade" className="form-label">Display Grade As</label>
            <select id="wd-display-grade" className="form-select">
              <option value="percentage">Percentage</option>
              <option value="points">Points</option>
              <option value="letter">Letter Grade</option>
            </select>
          </div>

          <div className="col-md-6 mb-3">
            <label htmlFor="wd-submission-type" className="form-label">Submission Type</label>
            <select id="wd-submission-type" className="form-select">
              <option value="Online">Online</option>
              <option value="On Paper">On Paper</option>
              <option value="External Tool">External Tool</option>
            </select>
          </div>
        </div>

        <h5 className="mb-3">Online Entry Options</h5>
        <div className="form-check mb-2">
          <input type="checkbox" className="form-check-input" id="wd-text-entry" />
          <label htmlFor="wd-text-entry" className="form-check-label">Text Entry</label>
        </div>
        <div className="form-check mb-2">
          <input type="checkbox" className="form-check-input" id="wd-website-url" />
          <label htmlFor="wd-website-url" className="form-check-label">Website URL</label>
        </div>
        <div className="form-check mb-2">
          <input type="checkbox" className="form-check-input" id="wd-media-recordings" />
          <label htmlFor="wd-media-recordings" className="form-check-label">Media Recordings</label>
        </div>
        <div className="form-check mb-2">
          <input type="checkbox" className="form-check-input" id="wd-student-annotation" />
          <label htmlFor="wd-student-annotation" className="form-check-label">Student Annotation</label>
        </div>
        <div className="form-check mb-4">
          <input type="checkbox" className="form-check-input" id="wd-file-upload" />
          <label htmlFor="wd-file-upload" className="form-check-label">File Uploads</label>
        </div>

        {/* Date Section */}
        <h5 className="mb-3">Assign</h5>
        <div className="row mb-4">
          <div className="col-md-4">
            <label className="form-label">Assign to</label>
            <input id="wd-assign-to" value="Everyone" className="form-control" />
          </div>
          <div className="col-md-4">
            <label className="form-label">Due</label>
            <input type="date" id="wd-due-date" className="form-control" />
          </div>
          <div className="col-md-4">
            <label className="form-label">Available from</label>
            <input type="date" id="wd-available-from" className="form-control" />
          </div>
        </div>

        <div className="d-flex justify-content-end mt-4">
          <button className="btn btn-light border me-2">
            <FaTimes className="me-1" /> Cancel
          </button>
          <button className="btn btn-primary text-white">
            <FaSave className="me-1" /> Save
          </button>
        </div>
      </div>
    </div>
  );
}