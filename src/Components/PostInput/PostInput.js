import { useContext, useState } from "react";
import UserContext from "../../ContextFolder/ContextProvider";
function PostInput() {
  const context = useContext(UserContext);
  const [postContent, setPostContent] = useState("");
  return (
    <div id="postInput">
      <input
        type="text"
        value={postContent}
        onChange={(e) => setPostContent(e.target.value)}
        style={{ border: "none", borderRadius: "10px" }}
      ></input>
      <div className="d-flex justify-content-end mt-3">
        {context.mainState.loggedIn ? (
          <button>Post</button>
        ) : (
          <button disabled>Post</button>
        )}
      </div>
    </div>
  );
}

export default PostInput;
