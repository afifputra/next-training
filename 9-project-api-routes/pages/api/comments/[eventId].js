import { comments } from "./index.js";

const handler = (req, res) => {
  if (req.method === "GET") {
    const eventId = req.query.eventId;

    if (!eventId) {
      res.status(400).json({ message: "Invalid request method" });
    }

    const filteredComments = comments.filter((comment) => comment.eventId === eventId);

    res.status(200).json({ comments: filteredComments });
  } else {
    res.status(400).json({ message: "Invalid request method" });
  }
};

export default handler;
