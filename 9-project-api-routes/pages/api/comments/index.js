export const comments = [
  {
    id: "c1",
    name: "Maximilian",
    email: "max@mailinator.com",
    text: "A first comment!",
    eventId: "e2",
  },
];

const handler = (req, res) => {
  if (req.method === "POST") {
    const email = req.body?.email || "";
    const text = req.body?.text || "";
    const name = req.body?.name || "";
    const eventId = req.body?.eventId || "";

    if (!eventId) {
      res.status(400).json({ message: "Invalid event ID" });
      return;
    }

    if (email.trim() === "" || text.trim() === "" || name.trim() === "") {
      res.status(422).json({ message: "Invalid input" });
      return;
    }

    const newComment = {
      id: new Date().toISOString(),
      email,
      text,
      name,
      eventId,
    };

    comments.push(newComment);

    res.status(201).json({ message: "Success", message: "Succesfully added a comment!", comment: newComment });
  } else {
    res.status(400).json({ message: "Invalid request method" });
  }
};

export default handler;
