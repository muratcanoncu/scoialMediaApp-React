import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { HashRouter, Route, Switch } from "react-router-dom";
// import { useContext } from "react";
// import UserContext from "./ContextFolder/ContextProvider";
//! Components
import Navbar from "./Components/Navbar/Navbar";
import PostInput from "./Components/PostInput/PostInput";
import PostContainer from "./Components/PostList/PostContainer";
import LoginPage from "./Components/Login/Login";
import UserProfile from "./Components/UserProfile/UserProfile";
import SignUp from "./Components/SignUp/SignUp";
function App() {
  // const context = useContext(UserContext);
  // console.log(context.mainState);
  // console.log(context.mainState.userData);
  return (
    <HashRouter basename="/">
      <div className="App">
        <Navbar></Navbar>

        <Switch>
          <Route path="/" exact>
            <PostInput></PostInput>
            <PostContainer></PostContainer>
          </Route>
          <Route path="/profile">
            <UserProfile></UserProfile>
          </Route>
          <Route path="/login">
            <LoginPage></LoginPage>
          </Route>
          <Route path="/profile">
            <UserProfile></UserProfile>
          </Route>
          <Route path="/signup">
            <SignUp></SignUp>
          </Route>
          <Route path="/timeline">
            <PostInput></PostInput>
            <PostContainer></PostContainer>
          </Route>
        </Switch>
      </div>
    </HashRouter>
  );
}

export default App;
