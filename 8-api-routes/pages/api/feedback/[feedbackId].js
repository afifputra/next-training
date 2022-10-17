import { buildFeedbackPath, extractFeedback } from "./index.js";

function handler(req, res) {
  const { feedbackId } = req.query;
  console.log(feedbackId);

  const filePath = buildFeedbackPath();
  const data = extractFeedback(filePath);

  const selectedProduk = data.find((item) => item.id === feedbackId);

  res.status(200).json({ feedback: selectedProduk });
}

export default handler;
