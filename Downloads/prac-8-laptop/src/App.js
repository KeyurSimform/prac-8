import { useSelector } from "react-redux";
import "./App.css";
import SignUp from "./components/SignUp/SignUp";
import { Route} from "react-router-dom";
import {Switch} from "react-router-dom";


function App() {
	const isAuthorized = useSelector(
		(state) => state.userLoginSlice.isAuthorized
	);
	return (
		<Switch>
			<Route path="/" exact>
				<Redirect to="/signup" />
			</Route>
			<Route path="/homepage">
				{isAuthorized && <HomePage />}
				{!isAuthorized && <Redirect to={"/signup"}/>}
			</Route>
			<Route path="/signup" >
				{!isAuthorized && <SignUp/>}
				{isAuthorized && <Redirect to={"/homepage"}/>}
			</Route>
		</Switch>
	);
}

export default App;
