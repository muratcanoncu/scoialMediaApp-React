import { useContext, useState } from "react";
import UserContext from "../../ContextFolder/ContextProvider";
function PostInput() {
  const context = useContext(UserContext);
  const [postContent, setPostContent] = useState("");
  const newPostHandler = (dispatch) => {
    dispatch({
      type: "NEW_POST",
      payload: postContent,
    });
    setPostContent("");
  };
  return (
    <div id="postInput">
      <input
        type="text"
        value={postContent}
        onChange={(e) => setPostContent(e.target.value)}
        maxLength="200"
        minLength="1"
        style={{ border: "none", borderRadius: "10px" }}
      ></input>
      <div className="d-flex justify-content-end mt-4">
        {context.mainState.loggedIn ? (
          <button
            title="Send it to me!"
            onClick={() => newPostHandler(context.myDispatch)}
          >
            Post
          </button>
        ) : (
          <button disabled>Post</button>
        )}
      </div>
    </div>
  );
}

export default PostInput;
