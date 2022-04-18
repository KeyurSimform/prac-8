import { createSlice } from "@reduxjs/toolkit";

// let LoggedIn;
// if (JSON.parse(localStorage.getItem("user"))) {
//   LoggedIn = true;
// } else {
//   LoggedIn = false;
// }
const userSlice = createSlice({
  name: "user",
  initialState: {
    isLoggedIn: false || JSON.parse(localStorage.getItem("user"))?.isLoggedIn,
    profilePicture: null,
    name: "",
    email: "",
    phone: "",
    password: "",
  },

  reducers: {
    login(state, { payload }) {
      state.isLoggedIn = true;
      state.profilePicture = payload.profilePicture;
      state.name = payload.name;
      state.email = payload.email;
      state.phone = payload.phone;
      state.password = payload.password;
    },
    logout(state) {
      state.isLoggedIn = false;
      state.profilePicture = null;
      state.name = "";
      state.email = "";
      state.phone = "";
      state.password = "";
    },
    // setUser(state, { payload }) {
    //   state.isLoggedIn = true;
    //   state.profilePicture = payload.profilePicture;
    //   state.name = payload.name;
    //   state.email = payload.email;
    //   state.phone = payload.phone;
    //   state.password = payload.password;
    // },
  },
});

export const userActions = userSlice.actions;
export default userSlice;
