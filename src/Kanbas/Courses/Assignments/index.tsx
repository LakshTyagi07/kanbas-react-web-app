import { useParams } from "react-router";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { BsGripVertical } from "react-icons/bs";
import { FaPlus, FaTrash, FaPencil } from "react-icons/fa6";
import { GoSearch } from "react-icons/go";
import { IoEllipsisVertical } from "react-icons/io5";
import { MdOutlineAssignment } from "react-icons/md";

import { deleteAssignment } from "./reducer";
import GreenCheckmark from "../Modules/GreenCheckmark";
import "./index.css";

const Assignments = () => {
  const { cid } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [modalShow, setModalShow] = useState<boolean>(false);
  const [selectedAssignmentId, setSelectedAssignmentId] = useState<string>("");
  
  const { assignments } = useSelector((state: any) => state.assignmentsReducer);
  const { currentUser } = useSelector((state: any) => state.accountReducer);

  const handleDeleteClick = (assignmentId: string) => {
    setSelectedAssignmentId(assignmentId);
    setModalShow(true);
  };

  const handleDeleteConfirm = () => {
    dispatch(deleteAssignment(selectedAssignmentId));
    setModalShow(false);
  };
  
  return (
    <div id="wd-assignments">
      {/* Assignment Controls */}
      <div id="wd-assignments-controls" className="text-nowrap d-flex justify-content-between align-items-center assignments-controls-container mb-4">
        <div className="h-100 border rounded d-flex flex-row justify-content-center align-items-center w-50">
          <GoSearch className="me-2 ms-3" />
          <input
            type="text"
            id="wd-search-assignment"
            placeholder="Search..."
            className="search-input"
          />
        </div>
        {currentUser.role === "FACULTY" && (
          <div className="h-100">
            <button id="wd-add-assignment-group" className="btn btn-lg btn-secondary me-1">
              <FaPlus className="me-2 mb-1" />
              Group
            </button>
            <button
              id="wd-add-assignment"
              className="btn btn-lg btn-danger"
              onClick={() => navigate(`/Kanbas/Courses/${cid}/Assignments/new`)}
            >
              <FaPlus className="me-2 mb-1" />
              Assignment
            </button>
          </div>
        )}
      </div>

      {/* Assignments List */}
      <ul id="wd-container" className="list-group rounded-0">
        <li className="wd-assignment list-group-item p-0 mb-5 fs-5 border-gray">
          <div id="wd-assignments-title" className="d-flex justify-content-between align-items-center bg-secondary p-2 py-3">
            <div className="d-flex justify-content-center align-items-center">
              <BsGripVertical className="me-2 fs-4" />
              <p className="m-0 fw-bold">ASSIGNMENTS</p>
            </div>
            <div className="d-flex justify-content-center align-items-center gap-2">
              <div className="border rounded-pill px-4 py-1 fs-5">
                40% of total
              </div>
              {currentUser.role === "FACULTY" && (
                <FaPlus className="fs-4 text-muted" />
              )}
              <IoEllipsisVertical className="fs-4 text-muted" />
            </div>
          </div>

          <ul className="wd-assignment-list list-group rounded-0">
            {assignments
              .filter((assignment: any) => assignment.course === cid)
              .map((assignment: any) => (
                <li
                  className="wd-assignment-list-item list-group-item p-2 d-flex justify-content-between align-items-center"
                  key={assignment._id}
                >
                  <div className="d-flex justify-content-center align-items-center">
                    <div>
                      <BsGripVertical className="me-2 fs-4 text-secondary" />
                      <MdOutlineAssignment className="me-2 fs-4 text-light-green" />
                    </div>
                    <div className="my-2 mx-4">
                      <a 
                        href={`#/Kanbas/Courses/${cid}/Assignments/${assignment._id}`}
                        className="wd-assignment-link text-decoration-none"
                      >
                        {assignment.title}
                      </a>
                      <p className="m-0 fs-6">
                        <span className="text-danger">Multiple Modules</span> |
                        <strong> Not available until </strong>
                        {assignment.availableFrom} | <br />
                        <strong> Due </strong>
                        {assignment.availableUntil} | {assignment.points} pts
                      </p>
                    </div>
                  </div>
                  <div className="float-end">
                    {currentUser.role === "FACULTY" && (
                      <>
                        <FaPencil 
                          className="text-primary me-2" 
                          onClick={() => navigate(`/Kanbas/Courses/${cid}/Assignments/${assignment._id}`)} 
                        />
                        <FaTrash 
                          className="text-danger me-2" 
                          onClick={() => handleDeleteClick(assignment._id)} 
                        />
                      </>
                    )}
                    <GreenCheckmark />
                    <IoEllipsisVertical className="fs-4" />
                  </div>
                </li>
              ))}
          </ul>
        </li>
      </ul>


    </div>
  );
};

export default Assignments;