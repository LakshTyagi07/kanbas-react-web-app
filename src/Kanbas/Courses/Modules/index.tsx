import { useParams } from "react-router"; // Import useParams to get course ID
import * as db from "../../Database"; // Import the modules from Database
import { BsGripVertical } from "react-icons/bs";
import ModuleControlButtons from "./ModuleControlButtons";
import LessonControlButtons from "./LessonControlButtons";
import ModulesControls from "./ModulesControls";

export default function Modules() {
  const { cid } = useParams(); // Get the course ID from the URL
  const modules = db.modules; // Load the modules data from the database

  // Debugging: Log the cid and the modules data
  console.log("Course ID:", cid); 
  console.log("All Modules:", modules); 

  // Filter the modules to show only those that belong to the current course
  const courseModules = modules.filter((module) => module.course === cid);

  // Debugging: Log the result of the filtering
  console.log("Filtered Modules for Course:", courseModules);

  return (
    <div>
      <ModulesControls /><br /><br /><br /><br />
      <ul id="wd-modules" className="list-group rounded-0">
        {courseModules.map((module, index) => (
          <li key={index} className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
            <div className="wd-title p-3 ps-2 bg-secondary">
              <BsGripVertical className="me-2 fs-3" />
              {module.name} {/* Display the module name */}
              <ModuleControlButtons />
            </div>
            {/* Check if the module has lessons */}
            {module.lessons && (
              <ul className="wd-lessons list-group rounded-0">
                {module.lessons.map((lesson, lessonIndex) => (
                  <li key={lessonIndex} className="wd-lesson list-group-item p-3 ps-1">
                    <BsGripVertical className="me-2 fs-3" />
                    {lesson.name} {/* Display the lesson name */}
                    <LessonControlButtons />
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
        {/* Render a message if no modules are found for the course */}
        {courseModules.length === 0 && <li>No modules found for this course.</li>}
      </ul>
    </div>
  );
}
