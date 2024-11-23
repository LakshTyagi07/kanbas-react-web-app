import React, { useState } from "react";

const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;

export default function WorkingWithObjects() {
  const [assignment, setAssignment] = useState({
    id: 1,
    title: "NodeJS Assignment",
    description: "Create a NodeJS server with ExpressJS",
    due: "2021-10-10",
    completed: false,
    score: 0,
  });

  const [module, setModule] = useState({
    id: "CS101",
    name: "Introduction to Computer Science",
    description: "Basic concepts of computer science",
    course: "Computer Science",
  });

  const ASSIGNMENT_API_URL = `${REMOTE_SERVER}/lab5/assignment`;
  const MODULE_API_URL = `${REMOTE_SERVER}/lab5/module`;

  return (
    <div id="wd-working-with-objects">
      <h3>Working With Objects</h3>

      {/* Module Section */}
      <h4>Module</h4>
      <input
        className="form-control w-75"
        value={module.name}
        onChange={(e) => setModule({ ...module, name: e.target.value })}
      />
      <a
        className="btn btn-primary"
        href={`${MODULE_API_URL}/name/${encodeURIComponent(module.name)}`}
      >
        Update Module Name
      </a>
      <a className="btn btn-primary" href={`${MODULE_API_URL}`}>
        Get Module
      </a>
      <a className="btn btn-primary" href={`${MODULE_API_URL}/name`}>
        Get Module Name
      </a>
      <input
        className="form-control w-75"
        value={module.description}
        onChange={(e) => setModule({ ...module, description: e.target.value })}
      />
      <a
        className="btn btn-primary"
        href={`${MODULE_API_URL}/description/${encodeURIComponent(module.description)}`}
      >
        Update Module Description
      </a>
      <hr />

      {/* Assignment Section */}
      <h4>Assignment</h4>
      <input
        className="form-control w-75"
        value={assignment.title}
        onChange={(e) =>
          setAssignment({ ...assignment, title: e.target.value })
        }
      />
      <a
        className="btn btn-primary"
        href={`${ASSIGNMENT_API_URL}/title/${encodeURIComponent(assignment.title)}`}
      >
        Update Title
      </a>
      <input
        className="form-control w-75"
        type="number"
        value={assignment.score}
        onChange={(e) =>
          setAssignment({ ...assignment, score: Number(e.target.value) })
        }
      />
      <a
        className="btn btn-primary"
        href={`${ASSIGNMENT_API_URL}/score/${assignment.score}`}
      >
        Update Score
      </a>
      <input
        type="checkbox"
        checked={assignment.completed}
        onChange={(e) =>
          setAssignment({ ...assignment, completed: e.target.checked })
        }
      />
      <a
        className="btn btn-primary"
        href={`${ASSIGNMENT_API_URL}/completed/${assignment.completed}`}
      >
        Update Completed
      </a>
      <hr />
    </div>
  );
}
