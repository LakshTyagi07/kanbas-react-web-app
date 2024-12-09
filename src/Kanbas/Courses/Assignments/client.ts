import axios from "axios";

const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
const USERS_API = `${REMOTE_SERVER}/api/users`;

const axiosWithCredentials = axios.create({ withCredentials: true });

export const findAssignmentsForCourse = async (courseId: string) => {
  const response = await axiosWithCredentials.get(
    `${USERS_API}/current/courses/${courseId}/assignments`
  );
  return response.data;
};

export const getAssignment = async (assignmentId: string) => {
  const response = await axiosWithCredentials.get(
    `${USERS_API}/current/assignments/${assignmentId}`
  );
  return response.data;
};

export const createAssignment = async (courseId: string, assignment: any) => {
  const response = await axiosWithCredentials.post(
    `${USERS_API}/current/courses/${courseId}/assignments`,
    assignment
  );
  return response.data;
};

export const deleteAssignment = async (assignmentId: string) => {
  const response = await axiosWithCredentials.delete(
    `${USERS_API}/current/assignments/${assignmentId}`
  );
  return response.data;
};

export const updateAssignment = async (assignmentId: string, assignment: any) => {
  const response = await axiosWithCredentials.put(
    `${USERS_API}/current/assignments/${assignmentId}`,
    assignment
  );
  return response.data;
};