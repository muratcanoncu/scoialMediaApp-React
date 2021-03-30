import { useContext } from "react";
import UserContext from "../../ContextFolder/ContextProvider";
import PostItem from "./PostItem";
function PostContainer() {
  const context = useContext(UserContext);
  const PostsList = context.mainState.activeUser.posts;
  if (context.mainState.loggedIn) {
    return (
      <div className="mb-5 pb-5">
        {PostsList.map((post) => {
          return (
            <PostItem
              key={post.id}
              content={post.content}
              like={post.like}
              id={post.id}
            ></PostItem>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}

export default PostContainer;
