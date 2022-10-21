import { useState, useEffect } from "react";
import { useSWRInfinite } from "swr";

import CommentList from "./comment-list";
import NewComment from "./new-comment";
import classes from "./comments.module.css";

function Comments(props) {
  const { eventId } = props;

  const [showComments, setShowComments] = useState(false);
  const [comments, setComments] = useState([]);

  const { data, error } = useSWRInfinite((index) => `/api/comments/${eventId}`);

  function toggleCommentsHandler() {
    setShowComments((prevStatus) => !prevStatus);
  }

  function addCommentHandler(commentData) {
    const finalData = {
      ...commentData,
      eventId: eventId,
    };

    fetch("/api/comments/", {
      method: "POST",
      body: JSON.stringify(finalData),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) =>
        setComments((prevComments) => {
          return [data.comment, ...prevComments];
        })
      );
  }

  useEffect(() => {
    if (data) {
      setComments(data[0].comments);
    }
  }, [data]);

  if (error) {
    return <p className="centered focused">Loading comments failed!</p>;
  }

  return (
    <section className={classes.comments}>
      <button onClick={toggleCommentsHandler}>{showComments ? "Hide" : "Show"} Comments</button>
      {showComments && <NewComment onAddComment={addCommentHandler} />}
      {showComments && <CommentList comments={comments} />}
    </section>
  );
}

export default Comments;
