import axios from "axios";

export const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
export const USERS_API = `${REMOTE_SERVER}/api/users`;

const axiosWithCredentials = axios.create({ withCredentials: true });

export const createCourse = async (course: any) => {
  const { data } = await axiosWithCredentials.post(
    `${USERS_API}/current/courses`, 
    course
  );
  return data;
};

export const fetchAllCourses = async () => {
  const { data } = await axiosWithCredentials.get(
    `${USERS_API}/current/courses`
  );
  return data;
};

export const updateCourse = async (course: any) => {
  const { data } = await axiosWithCredentials.put(
    `${USERS_API}/current/courses/${course._id}`, 
    course
  );
  return data;
};

export const deleteCourse = async (courseId: string) => {
  const { data } = await axiosWithCredentials.delete(
    `${USERS_API}/current/courses/${courseId}`
  );
  return data;
};

// Module-related functions
export const createModuleForCourse = async (courseId: string, module: any) => {
  const { data } = await axiosWithCredentials.post(
    `${USERS_API}/current/courses/${courseId}/modules`,
    module
  );
  return data;
};

export const findModulesForCourse = async (courseId: string) => {
  const { data } = await axiosWithCredentials.get(
    `${USERS_API}/current/courses/${courseId}/modules`
  );
  return data;
};