import { useState } from "react";
import { Fragment } from "react";
import { extractFeedback, buildFeedbackPath } from "../api/feedback";

function FeedbackPage(props) {
  const [detailFeedback, setDetailFeedback] = useState();

  const loadDetailHandler = async (id) => {
    const response = await fetch(`/api/${id}`);
    const data = await response.json();
    setDetailFeedback(data.feedback);
  };

  return (
    <Fragment>
      {detailFeedback && <p>{detailFeedback.email}</p>}
      <ul>
        {!props.feedbackItems.length && <p>No feedback yet!</p>}
        {props.feedbackItems.map((item) => (
          <li key={item.id}>
            {item.text} <button onClick={loadDetailHandler.bind(null, item.id)}>Show Details</button>
          </li>
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
