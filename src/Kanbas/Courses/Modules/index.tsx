import { useParams } from "react-router";
import { BsGripVertical } from "react-icons/bs";
import ModuleControlButtons from "./ModuleControlButtons";
import LessonControlButtons from "./LessonControlButtons";
import ModulesControls from "./ModulesControls";
import React, { useState } from "react";
import { addModule, editModule, updateModule, deleteModule } from "./reducer";
import { useSelector, useDispatch } from "react-redux";

export default function Modules() {
  const { cid } = useParams();
  const [moduleName, setModuleName] = useState("");
  const modules = useSelector((state: any) => state.modulesReducer.modules); 
  const dispatch = useDispatch(); 

  const courseModules = modules.filter((module: any) => module.course === cid); 

  return (
    <div className="wd-modules">
      <ModulesControls
        moduleName={moduleName}
        setModuleName={setModuleName}
        addModule={() => {
          dispatch(addModule({ name: moduleName, course: cid }));
          setModuleName("");
        }}
      />
      <br />
      <br />
      <br />
      <br />

      <ul id="wd-modules" className="list-group rounded-0">
        {courseModules.map((module: any, index: number) => (
          <li
            key={index}
            className="wd-module list-group-item p-0 mb-5 fs-5 border-gray"
          >
            <div className="wd-title p-3 ps-2 bg-secondary">
              <BsGripVertical className="me-2 fs-3" />
              {!module.editing && module.name}
              {module.editing && (
                <input
                  className="form-control w-50 d-inline-block"
                  onChange={(e) =>
                    dispatch(
                      updateModule({ ...module, name: e.target.value })
                    )
                  }
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      dispatch(updateModule({ ...module, editing: false }));
                    }
                  }}
                  defaultValue={module.name}
                />
              )}
              <ModuleControlButtons
                moduleId={module._id}
                deleteModule={(moduleId: string) => {
                  dispatch(deleteModule(moduleId));
                }}
                editModule={(moduleId: string) => {
                  dispatch(editModule(moduleId));
                }}
              />
            </div>
            {module.lessons && (
              <ul className="wd-lessons list-group rounded-0">
                {module.lessons.map((lesson: any, lessonIndex: number) => (
                  <li key={lessonIndex} className="wd-lesson list-group-item p-3 ps-1">
                    <BsGripVertical className="me-2 fs-3" /> {lesson.name} <LessonControlButtons />
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
        {courseModules.length === 0 && <li>No modules found for this course.</li>}
      </ul>
    </div>
  );
}
