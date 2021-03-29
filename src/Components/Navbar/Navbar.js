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
        <h1 className="text-white" title="Home">
          SOCIAL.APP
        </h1>
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
            <p className="mb-0 mr-4 text-dark font-weight-bolder">
              USER:{context.mainState.activeUser.userName}
            </p>
          </Link>
          <Link to="/" replace>
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
