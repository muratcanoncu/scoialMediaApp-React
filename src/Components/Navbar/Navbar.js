import { useContext } from "react";
import UserContext from "../../ContextFolder/ContextProvider";
import { Link } from "react-router-dom";
function Navbar(props) {
  const context = useContext(UserContext);
  const signOutHandler = (dispatch) => {
    dispatch({
      type: "SIGN_OUT",
    });
  };
  return (
    <nav className="d-flex justify-content-between align-items-center pt-1">
      <Link to="/" replace>
        <div id="label">
          <h1
            style={{ fontFamily: "Yanone Kaffeesatz" }}
            className="text-white"
            title="Home"
          >
            SOCIAL.APP <i className="fas fa-frog"></i>
          </h1>
        </div>
      </Link>
      {/* add font style to header */}
      {!context.mainState.loggedIn ? (
        <div id="navButtons" className="d-flex justify-content-between">
          <Link to="/login" replace>
            <button>Log In</button>
          </Link>
          <Link to="/signup">
            <button>Sign Up</button>
          </Link>
        </div>
      ) : (
        <div
          id="loggedUser"
          className="d-flex justify-content-end align-items-center"
        >
          <Link to="/profile" replace>
            <p
              id="toProfile"
              className="mb-1 mr-4 text-dark font-weight-bolder"
              title="To Profile"
            >
              USER:{context.mainState.activeUser.userName}
            </p>
          </Link>
          <Link to="/login" replace>
            <button onClick={() => signOutHandler(context.myDispatch)}>
              Sign Out
            </button>
          </Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
