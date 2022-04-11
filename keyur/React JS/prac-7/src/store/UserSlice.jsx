import { createSlice , createAsyncThunk} from "@reduxjs/toolkit";
// import UserApi from "../componenet/UserApi/UserApi";
import axios from "axios";
export const fetchAsyncUser = createAsyncThunk('newUser/fetchAsyncUser', async (currentPage) =>{
	const response = await axios.get(`${process.env.REACT_APP_API}${currentPage}`);
	// console.log(currentPage,response.data);w
	return response.data;
})


const userSlice = createSlice({
	name: "newUser",
	initialState: {
		newUser: [],
		reqStatus : "",
		currentPage: 1,
		totalPage : 2,
	},
	reducers : {
        setPageNumber(state,action){
            state.currentPage = action.payload;
        },
	},
	extraReducers: {
		[fetchAsyncUser.pending]: (state)=>{
			state.reqStatus = "loading";
		},
		[fetchAsyncUser.fulfilled]:(state , {payload})=>{
			state.reqStatus = "successfull"
			state.newUser = payload.data;
			state.currentPage = payload.page;
			state.totalPage = payload.total_pages;			
		},
		[fetchAsyncUser.rejected]:(state)=>{
			state.reqStatus = "failed"
		}
	}
});
export const userActions = userSlice.actions;
export default userSlice;
