import React from "react";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import UserContext from "../../ContextFolder/ContextProvider";
function Login() {
  const context = useContext(UserContext);
  const [loginName, setLoginName] = useState("");
  const loginUser = (dispatch) => {
    dispatch({
      type: "LOGIN_USERNAME",
      payload: loginName,
    });
    setLoginName("");
  };

  return (
    <div
      className="d-flex justify-content-around align-items-center flex-column mx-auto mt-5"
      style={{
        height: "190px",
        width: "400px",
        boxShadow: "5px 5px 5px grey",
        background: "tomato",
        borderRadius: "10px",
      }}
    >
      {context.mainState.loggedIn ? (
        <h3>Welcome {context.mainState.activeUser.userName}</h3>
      ) : (
        <input
          type="text"
          className="px-1"
          value={loginName}
          style={{
            height: "36px",
            width: "70%",
            borderRadius: "10px",
            outline: "none",
            border: "none",
          }}
          onChange={(e) => setLoginName(e.target.value)}
        ></input>
      )}

      {context.mainState.loggedIn ? (
        <div className="d-flex justify-content-between w-50">
          <Link to="/profile">
            <button className="loggedInButtons">To Profile</button>
          </Link>
          <Link to="/timeline">
            <button className="loggedInButtons">To Timeline</button>
          </Link>
        </div>
      ) : (
        <div className="text-center">
          <p className="mb-4 font-weight-bolder text-white">
            Please Enter a valid username or sign up!
          </p>
          {/* <Link to="/login"> */}
          <button
            className="ml-1 mb-1 loggedInButtons"
            onClick={() => loginUser(context.myDispatch)}
          >
            LOG IN !
          </button>
          {/* </Link> */}
        </div>
      )}
    </div>
  );
}

export default Login;
