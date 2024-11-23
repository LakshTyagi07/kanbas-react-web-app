import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import * as client from "./client";

function EnrollButton({ courseId }: { courseId: string }) {
  const [isEnrolled, setIsEnrolled] = useState(false);
  const [loading, setLoading] = useState(true);
  const { currentUser } = useSelector((state: any) => state.accountReducer);

  useEffect(() => {
    const checkEnrollment = async () => {
      if (currentUser && currentUser.role === "STUDENT") {
        const enrolled = await client.checkEnrollmentStatus(courseId);
        setIsEnrolled(enrolled);
      }
      setLoading(false);
    };
    checkEnrollment();
  }, [courseId, currentUser]);

  const handleEnrollment = async () => {
    try {
      if (isEnrolled) {
        await client.unenrollFromCourse(courseId);
        setIsEnrolled(false);
      } else {
        await client.enrollInCourse(courseId);
        setIsEnrolled(true);
      }
    } catch (error) {
      console.error("Error handling enrollment:", error);
    }
  };

  if (loading || !currentUser || currentUser.role !== "STUDENT") {
    return null;
  }

  return (
    <button
      onClick={handleEnrollment}
      className={`btn ${isEnrolled ? 'btn-danger' : 'btn-success'}`}
    >
      {isEnrolled ? 'Unenroll' : 'Enroll'}
    </button>
  );
}

export default EnrollButton; 