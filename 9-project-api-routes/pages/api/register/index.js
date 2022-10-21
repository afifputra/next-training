const handler = (req, res) => {
  const email = req.body?.email || "";

  if (req.method === "POST") {
    res.status(200).json({ message: "Success", email });
  } else {
    res.status(400).json({ message: "Invalid request method" });
  }
};

export default handler;
