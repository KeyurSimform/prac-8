import axios from "axios";
// import { useSelector } from "react-redux";

// const pageNumber = useSelector((state)=>state.newUser.currentPage);


export default axios.create({


    baseURL: "https://reqres.in/api/users?page=1",
});