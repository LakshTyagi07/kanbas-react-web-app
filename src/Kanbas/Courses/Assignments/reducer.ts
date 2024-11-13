import { createSlice } from "@reduxjs/toolkit";
import { assignments as initialAssignments } from "../../Database";

const initialState = {
  assignments: initialAssignments || [],
};

const assignmentsSlice = createSlice({
  name: "assignments",
  initialState,
  reducers: {
    addAssignment: (state, { payload: assignment }) => {
  const newAssignment: any = {
    _id: new Date().getTime().toString(),
    title: assignment.title,
    course: assignment.course,
    description: assignment.description,
    points: assignment.points,
    dueDate: assignment.dueDate,
    availableFrom: assignment.availableFrom,
    availableUntil: assignment.availableUntil,
  };
  state.assignments = [...state.assignments, newAssignment] as any;
},
deleteAssignment: (state, { payload: assignmentId }) => {
  state.assignments = state.assignments.filter(
    (a: any) => a._id !== assignmentId
  );
    },
    updateAssignment: (state, { payload: updatedAssignment }) => {
      state.assignments = state.assignments.map((a: any) =>
        a._id === updatedAssignment._id ? updatedAssignment : a
      );
    },
  },
});

export const { addAssignment, deleteAssignment, updateAssignment } = assignmentsSlice.actions;
export default assignmentsSlice.reducer;
