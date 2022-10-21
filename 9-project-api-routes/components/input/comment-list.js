import classes from "./comment-list.module.css";

function CommentList(props) {
  const { comments } = props;

  if (!comments || comments.length === 0) {
    return <p className="centered">No comments yet!</p>;
  }

  return (
    <ul className={classes.comments}>
      {comments &&
        comments.map((comment) => (
          <li key={comment.id}>
            <p>{comment.text}</p>
            <div>
              By <address>{comment.name}</address>
            </div>
          </li>
        ))}
    </ul>
  );
}

export default CommentList;
