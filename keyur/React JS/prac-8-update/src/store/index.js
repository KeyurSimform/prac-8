import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";

// This is the redux store to maintain the user State 
const store = configureStore({
  reducer: {
    user: userSlice.reducer,
  },
});

export default store;
