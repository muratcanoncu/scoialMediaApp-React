import { useReducer, createContext, useEffect } from "react";
import { UserData } from "./UserData";
const UserContext = createContext();
const initialState = {
  loggedIn: false,
  userData: UserData,
  activeUser: {},
  activeUserIndex: null,
};
const reducer = (state, action) => {
  switch (action.type) {
    case "SIGN_UP":
      const newUserAccount = {
        id: state.userData.length + 1,
        userName: action.payload,
        follower: 0,
        following: 0,
        posts: [],
      };
      return {
        ...state,
        loggedIn: true,
        userData: [...state.userData, newUserAccount],
        activeUser: newUserAccount,
        activeUserIndex: state.userData.length,
      };
    case "LOGIN_USERNAME":
      const loginUserIndex = state.userData.findIndex((user) => {
        return user.userName == action.payload;
      });
      const newActiveUser = state.userData[loginUserIndex];
      if (newActiveUser) {
        return {
          ...state,
          loggedIn: true,
          activeUser: newActiveUser,
          activeUserIndex: loginUserIndex,
        };
      } else {
        alert("Please Enter a valid username or sign up!");
      }
    case "SIGN_OUT":
      return {
        ...state,
        loggedIn: false,
        activeUser: { posts: [] },
      };
    case "LIKE_BUTTON":
      const postIndex = state.activeUser.posts.findIndex((post) => {
        return post.id === action.payload;
      });
      const updatedActiveUser = state.activeUser;
      updatedActiveUser.posts[postIndex].like = action.like + 1;
      const updatedUserData = state.userData;
      updatedUserData[state.activeUserIndex].posts[postIndex].like =
        action.like + 1;
      return {
        ...state,
        userData: updatedUserData,
        activeUser: updatedActiveUser,
      };
    case "NEW_POST":
      const newPostUserData = state.userData;
      const newPost = {
        id: newPostUserData[state.activeUserIndex].posts.length + 1,
        content: action.payload,
        like: 0,
      };
      newPostUserData[state.activeUserIndex].posts.unshift(newPost);
      return {
        ...state,
      };
    case "DELETE_POST":
      const postsAfterDelete = state.userData[
        state.activeUserIndex
      ].posts.filter((post) => {
        return post.id !== action.payload;
      });
      const newUserData = state.userData;
      newUserData[state.activeUserIndex].posts = postsAfterDelete;
      return {
        ...state,
        userData: newUserData,
        activeUser: newUserData[state.activeUserIndex],
      };
  }
};
export function ContextProvider(props) {
  const [socialMediaState, dispatch] = useReducer(reducer, initialState, () => {
    const localData = localStorage.getItem("socialMediaUserData");
    return localData ? JSON.parse(localData) : initialState;
  });
  useEffect(() => {
    localStorage.setItem(
      "socialMediaUserData",
      JSON.stringify(socialMediaState)
    );
  }, [socialMediaState]);
  return (
    <UserContext.Provider
      value={{ mainState: socialMediaState, myDispatch: dispatch }}
    >
      {props.children}
    </UserContext.Provider>
  );
}

export default UserContext;
