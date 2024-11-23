import { useState, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router";
import { useSelector } from "react-redux";
import * as userClient from "./Account/client";
import * as courseClient from "./Courses/client";
import Account from "./Account";
import Dashboard from "./Courses/Dashboard";
import KanbasNavigation from "./Navigation";
import Courses from "./Courses";
import ProtectedRoute from "./Account/ProtectedRoute";
import Session from "./Account/Session";
import "./styles.css";

export default function Kanbas() {
    const [courses, setCourses] = useState<any[]>([]);
    const [course, setCourse] = useState<any>({ name: '' });
    const { currentUser } = useSelector((state: any) => state.accountReducer);

    const addNewCourse = async () => {
        try {
            const newCourse = await userClient.createCourse(course);
            setCourses([...courses, newCourse]);
            setCourse({ name: "" }); // Reset the form
        } catch (error) {
            console.error("Error creating course:", error);
        }
    };
    const deleteCourse = async (courseId: string) => {
        try {
            await courseClient.deleteCourse(courseId);
            setCourses(courses.filter((course) => course._id !== courseId));
        } catch (error) {
            console.error("Error deleting course:", error);
        }
    };
    const updateCourse = async () => {
        try {
            await courseClient.updateCourse(course);
            setCourses(
                courses.map((c) => {
                    if (c._id === course._id) {
                        return course;
                    } else {
                        return c;
                    }
                })
            );
            setCourse({ name: "" }); // Reset form after update
        } catch (error) {
            console.error("Error updating course:", error);
        }
    };

    useEffect(() => {
        const fetchCourses = async () => {
            try {
                console.log("Fetching courses for user:", currentUser);
                const courses = await userClient.findMyCourses();
                console.log("Received courses:", courses);
                setCourses(courses);
            } catch (error) {
                console.error("Error fetching courses:", error);
            }
        };

        if (currentUser) {
            fetchCourses();
        }
    }, [currentUser]);

    return (
        <Session>
            <div id="wd-kanbas">
                <KanbasNavigation />
                <div className="wd-main-content-offset p-3">
                    <Routes>
                        <Route path="/" element={<Navigate to="/Kanbas/Account" />} />
                        <Route path="/Account/*" element={<Account />} />
                        <Route path="Dashboard" element={
                            <ProtectedRoute>
                                <Dashboard 
                                    courses={courses}
                                    course={course}
                                    setCourse={setCourse}
                                    addNewCourse={addNewCourse}
                                    deleteCourse={deleteCourse}
                                    updateCourse={updateCourse}
                                />
                            </ProtectedRoute>
                        } />
                        <Route path="/Courses/:cid/*" element={<Courses courses={courses} />} />
                        <Route path="/Calendar" element={<h1>Calendar</h1>} />
                        <Route path="/Inbox" element={<h1>Inbox</h1>} />
                    </Routes>
                </div>
            </div>
        </Session>
    );
}