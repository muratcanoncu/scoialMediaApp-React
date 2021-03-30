import { useContext } from "react";
import UserContext from "../../ContextFolder/ContextProvider";
function PostItem(props) {
  const context = useContext(UserContext);
  // console.log(context.mainState.activeUser.posts);
  const likeButton = (dispatch) => {
    dispatch({
      type: "LIKE_BUTTON",
      payload: props.id,
      like: props.like,
    });
  };
  const deletePost = (dispatch) => {
    dispatch({
      type: "DELETE_POST",
      payload: props.id,
    });
  };
  return (
    <div
      id="postItem"
      className="d-flex justify-content-center align-items-center flex-column px-2 py-2"
    >
      <p
        style={{ width: "100%", background: "tomato", borderRadius: "13px" }}
        className="px-3 py-3 text-white font-weight-bolder h-50"
      >
        {props.content}
      </p>
      <div
        className="d-flex justify-content-between align-items-center mt-1 h-50"
        style={{ width: "95%" }}
      >
        <div className="d-flex ">
          <p className="mb-0 mr-2 font-weight-bolder">{props.like}</p>
          <p
            id="likeButton"
            onClick={() => likeButton(context.myDispatch)}
            style={{ cursor: "pointer" }}
          >
            ❤
          </p>
        </div>

        <button
          id="deletePostButton"
          title="Are you sure?"
          className="loggedInButtons"
          onClick={() => deletePost(context.myDispatch)}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default PostItem;
