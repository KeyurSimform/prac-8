import "./App.css";
import { userActions } from "./store/userSlice";
import { useEffect } from "react";
import Routes from "./Routes/Routes";
import { useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      dispatch(userActions.login(user));
    }
  }, [dispatch]);

  return (
    <>
      <Routes />
    </>
  );
}

export default App;
