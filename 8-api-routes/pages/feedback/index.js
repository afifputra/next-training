import { Fragment } from "react";
import { extractFeedback, buildFeedbackPath } from "../api/feedback";

function FeedbackPage(props) {
  return (
    <Fragment>
      <ul>
        {!props.feedbackItems.length && <p>No feedback yet!</p>}
        {props.feedbackItems.map((item) => (
          <li key={item.id}>{item.text}</li>
        ))}
      </ul>
    </Fragment>
  );
}

export async function getStaticProps() {
  const filePath = buildFeedbackPath();
  const data = extractFeedback(filePath);

  return {
    props: {
      feedbackItems: data,
    },
  };
}

export default FeedbackPage;
