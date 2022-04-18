import "./App.css";
import {BrowserRouter  , Routes , Route} from "react-router-dom";
import PrivateRoutes from "./Routes/PrivateRoutes";
import SignUp from "./components/SignUp/SignUp"
import HomePage from "./components/HomePage/HomePage"
function App() {
  // here i have implemented the Routing part for the signup app using the Router V6 

  // here the PrivateRoute componenet will protetct the user to redirect to the user from signup page to the homepage without login
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PrivateRoutes />} >
          <Route path="/homepage" element={<HomePage />} />
        </Route>
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
