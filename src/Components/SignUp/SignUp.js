import { useState, useContext } from "react";
import UserContext from "../../ContextFolder/ContextProvider";
import { Link } from "react-router-dom";
function SignUp() {
  const context = useContext(UserContext);
  const [signUpName, setSignUpName] = useState("");
  const signUpHandler = (dispatch) => {
    dispatch({
      type: "SIGN_UP",
      payload: signUpName,
    });
    // setSignUpName("");
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
      <input
        type="text"
        value={signUpName}
        minLength="1"
        maxLength="20"
        className="px-2 font-weight-bolder"
        style={{
          height: "36px",
          width: "70%",
          borderRadius: "10px",
          outline: "none",
          border: "none",
        }}
        onChange={(e) => setSignUpName(e.target.value)}
      ></input>
      <p className="mb-0 text-white font-weight-bolder">Please Sign Up!</p>
      <Link to="/profile">
        <button
          onClick={() => signUpHandler(context.myDispatch)}
          className="loggedInButtons mb-2"
        >
          Sign Up!
        </button>
      </Link>
    </div>
  );
}

export default SignUp;
