import { FaPlus } from "react-icons/fa6";
import GreenCheckmark from "./GreenCheckmark";
import ModuleEditor from "./ModuleEditor";

export default function ModulesControls({ moduleName, setModuleName, addModule }:
  { moduleName: string; setModuleName: (title: string) => void; addModule: () => void; }) {
  
  return (
    <div id="wd-modules-controls" className="text-nowrap mb-4">
      <button id="wd-collapse-all" className="btn btn-lg btn-secondary me-2">
        Collapse All
      </button>
      
      <button id="wd-view-progress" className="btn btn-lg btn-secondary me-2">
        View Progress
      </button>
      
      <div className="dropdown d-inline me-2">
        <button id="wd-publish-all-btn" className="btn btn-lg btn-secondary dropdown-toggle"
          type="button" data-bs-toggle="dropdown">
          <GreenCheckmark />
          Publish All
        </button>
        <ul className="dropdown-menu">
          <li>
            <a id="wd-publish-all-modules-and-items-btn" className="dropdown-item" href="#">
              <GreenCheckmark />
              Publish all modules and items
            </a>
          </li>
          <li>
            <a id="wd-publish-modules-only-btn" className="dropdown-item" href="#">
              <GreenCheckmark />
              Publish modules only
            </a>
          </li>
          <li>
            <a id="wd-unpublish-all-modules-and-items-btn" className="dropdown-item" href="#">
              Unpublish all modules and items
            </a>
          </li>
          <li>
            <a id="wd-unpublish-modules-only-btn" className="dropdown-item" href="#">
              Unpublish modules only
            </a>
          </li>
        </ul>
      </div>

      {/* Add data attributes to trigger modal */}
      <button id="wd-add-module-btn" className="btn btn-lg btn-danger"
        data-bs-toggle="modal" data-bs-target="#wd-add-module-dialog">
        <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
        Module
      </button>

      {/* ModuleEditor component as a modal */}
      <ModuleEditor 
        dialogTitle="Add Module" 
        moduleName={moduleName} 
        setModuleName={setModuleName} 
        addModule={addModule} 
      />
    </div>
  );
}
