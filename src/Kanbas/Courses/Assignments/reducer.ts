import { createSlice } from "@reduxjs/toolkit";

// Add this interface at the top
interface Assignment {
  _id?: string;
  title: string;
  course: string;
}

const initialState = {
  assignments: [] as Assignment[],
  assignment: { title: "New Assignment", course: "" } as Assignment
};

const assignmentsSlice = createSlice({
  name: "assignments",
  initialState,
  reducers: {
    setAssignments: (state, action) => {
      state.assignments = action.payload;
    },
    addAssignment: (state, action) => {
      state.assignments.push(action.payload);
    },
    deleteAssignment: (state, action) => {
      state.assignments = state.assignments.filter(
        (assignment) => assignment._id !== action.payload
      );
    },
    updateAssignment: (state, action) => {
      state.assignments = state.assignments.map((assignment) =>
        assignment._id === action.payload._id ? action.payload : assignment
      );
    },
    setAssignment: (state, action) => {
      state.assignment = action.payload;
    }
  }
});

export const { setAssignments, addAssignment, deleteAssignment, 
               updateAssignment, setAssignment } = assignmentsSlice.actions;
export default assignmentsSlice.reducer;
