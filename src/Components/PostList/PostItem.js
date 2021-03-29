import { useContext } from "react";
import UserContext from "../../ContextFolder/ContextProvider";
function PostItem(props) {
  const context = useContext(UserContext);
  console.log(context.mainState.activeUser.posts);
  const likeButton = (dispatch) => {
    dispatch({
      type: "LIKE_BUTTON",
      payload: props.id,
      like: props.like,
    });
  };
  return (
    <div
      id="postItem"
      className="d-flex justify-content-center align-items-center flex-column p-3"
    >
      <p
        style={{ width: "95%", background: "tomato", borderRadius: "13px" }}
        className="px-2 py-2 text-white font-weight-bolder"
      >
        {props.content}
      </p>
      <div
        className="d-flex justify-content-between align-items-center"
        style={{ width: "95%" }}
      >
        <div className="d-flex">
          <p className="mb-0 mr-1">{props.like}</p>
          <p
            onClick={() => likeButton(context.myDispatch)}
            style={{ cursor: "pointer" }}
          >
            ❤
          </p>
        </div>

        <button className="loggedInButtons">Delete</button>
      </div>
    </div>
  );
}

export default PostItem;
