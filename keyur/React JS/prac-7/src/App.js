import { Provider } from "react-redux";
import "./App.css";
import UserDataContainer from "./componenet/UserDataContainer/UserDataContainer";
import store from "./store";


// Here I have used the react toolkit to manage the state so i have wrapped the whole app inside a provider componenet
// Providere componenet will provide the access to the store to the while app.
// The UserData is the outer most contianer of the app.
function App() {
	return (
		<Provider store={store}>
		<div className="UserListContainer">
			<UserDataContainer />
		</div>
		{console.log(process.env.REACT_APP_ENV)}
		</Provider>
	);
}

export default App;
