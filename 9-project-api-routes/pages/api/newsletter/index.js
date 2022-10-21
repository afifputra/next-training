const handler = (req, res) => {
  if (req.method === "POST") {
    const email = req.body?.email || "";

    if (!email || email.trim() === "" || !email.includes("@")) {
      res.status(422).json({ message: "Invalid email address." });
      return;
    }

    res.status(200).json({ message: "Success", email });
  } else {
    res.status(400).json({ message: "Invalid request method" });
  }
};

export default handler;
