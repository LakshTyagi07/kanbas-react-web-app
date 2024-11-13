import { configureStore } from "@reduxjs/toolkit";

import accountReducer from "./Account/reducer";
import modulesReducer from "./Courses/Modules/reducer";
import enrollmentReducer from "./enrollmentReducer";
import assignmentReducer from "./Courses/Assignments/reducer";

const store = configureStore({
  reducer: {
    accountReducer,
    modulesReducer,
    enrollmentReducer,
    assignmentReducer,
  },
});

export default store;