import React from "react";
import "../HomePage/HomePage.css";
import { userActions } from "../../store/userSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";


// This is the simple homePage component which will render the data from the local storage, this will also provide the funtionality of logout from the app by using the redux 

const HomePage = () => {
  const userProfilePhoto = localStorage.getItem("profilePhoto");
  const user = JSON.parse(localStorage.getItem("user"));
  const dispatch = useDispatch();
  const navigate = useNavigate(); 

// this is the logout button handller
  const LogoutHandler = () => {
    dispatch(userActions.logout());
    localStorage.clear();
    navigate('/signup')
    
  };
  return (
    <div className="container mt-5">
      <div className="row d-flex justify-content-center">
        <div className="col-md-7">
          <div className="card p-3 py-4">
            <div className="text-center">
              <img
                src={userProfilePhoto}
                width="100"
                className="rounded-circle"
                alt=""
              />
            </div>
            <div className="text-center mt-3">
              <h5 className="mt-2 mb-0">{user.name}</h5>
              <span>{user.email}</span>
              <br></br>
              <span>{user.phone}</span>
              <div className="px-4 mt-1">
                <p className="fonts">
                  Consectetur adipiscing elit, sed do eiusmod tempor incididunt
                  ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                  quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                  ea commodo consequat.
                </p>
              </div>

              <div className="buttons">
                <button
                  className="btn btn-outline-primary px-4"
                  onClick={LogoutHandler}
                >
                  Logout
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
