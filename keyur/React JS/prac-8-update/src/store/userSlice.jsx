import { createSlice } from "@reduxjs/toolkit";

// This will assign the inital state.
let LoggedIn;
if (JSON.parse(localStorage.getItem("user"))) {
  LoggedIn = true;
} else {
  LoggedIn = false;
}
const userSlice = createSlice({
  name: "user",
  initialState: {
    isLoggedIn: LoggedIn,
    profilePicture: null,
    name: "",
    email: "",
    phone: "",
    password: "",
  },

  reducers: {

    // this is the login reducers which will update the state when user will signup
    login(state, { payload }) {
      state.isLoggedIn = true;
      state.profilePicture = payload.profilePicture;
      state.name = payload.name;
      state.email = payload.email;
      state.phone = payload.phone;
      state.password = payload.password;
    },

    // this is the logout state which will update the state when user will logout
    logout(state) {
      state.isLoggedIn = false;
      state.profilePicture = null;
      state.name = "";
      state.email = "";
      state.phone = "";
      state.password = "";
    },
  
  },
});

export const userActions = userSlice.actions;
export default userSlice;
