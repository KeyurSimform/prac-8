import { createSlice } from "@reduxjs/toolkit";

let LoggedIn;
if (JSON.parse( localStorage.getItem("user"))) {
    LoggedIn = true;
} else {
    LoggedIn = false;
}
const userSilce = createSlice({
	name: "userLoginSlice",
	initialState: {
		isAuthorized: LoggedIn,
		profilePicture: null,
		name: "",
		email: "",
		phone: "",
		password: "",
	},

	reducers: {
		login(state, { payload }) {
            state.isAuthorized = true;
            state.profilePicture = payload.profilePicture;
            state.name = payload.name;
            state.email = payload.email;
            state.phone = payload.phone;
            state.password = payload.password;
            localStorage.setItem("user", JSON.stringify({ isAuthorized : true ,name:payload.name,phone:payload.phone,email:payload.email }));
          },
          logout(state) {
            state.isAuthorized = false;
            localStorage.clear();
          },
          setUser(state, { payload }) {
            state.isAuthorized = true;
            state.profilePicture = payload.profilePicture;
            state.name = payload.name;
            state.email = payload.email;
            state.phone = payload.phone;
            state.password = payload.password;
          },
	},
});

export default userSilce;
export const userActions = userSilce.actions;