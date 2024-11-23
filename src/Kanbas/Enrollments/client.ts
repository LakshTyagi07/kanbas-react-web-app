import axios from "axios";

const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
const COURSES_API = `${REMOTE_SERVER}/api/courses`;

export const findCourseEnrollments = async (courseId: string) => {
  const response = await axios.get(
    `${COURSES_API}/${courseId}/enrollments`
  );
  return response.data;
};

export const enrollInCourse = async (courseId: string) => {
  const response = await axios.post(
    `${COURSES_API}/${courseId}/enrollments`
  );
  return response.data;
};

export const unenrollFromCourse = async (courseId: string) => {
  const response = await axios.delete(
    `${COURSES_API}/${courseId}/enrollments`
  );
  return response.data;
};

export const checkEnrollmentStatus = async (courseId: string) => {
  const response = await axios.get(
    `${COURSES_API}/${courseId}/enrollments/check`
  );
  return response.data.enrolled;
}; 