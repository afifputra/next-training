import { useState } from "react";
import classes from "./newsletter-registration.module.css";

function NewsletterRegistration() {
  const [email, setEmail] = useState("");

  function checkValidity() {
    if (email.trim() === "") {
      alert("Please enter a valid email address.");
      return;
    }

    if (!email.includes("@")) {
      alert("Invalid email!");
      return;
    }

    return true;
  }

  function emailHandler(event) {
    setEmail(event.target.value);
  }

  function registrationHandler(event) {
    event.preventDefault();

    const validate = checkValidity();

    if (!validate) {
      return;
    }

    fetch("/api/register", {
      method: "POST",
      body: JSON.stringify({ email }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
  }

  return (
    <section className={classes.newsletter}>
      <h2>Sign up to stay updated!</h2>
      <form onSubmit={registrationHandler}>
        <div className={classes.control}>
          <input type="email" id="email" placeholder="Your email" aria-label="Your email" onChange={emailHandler} value={email} />
          <button>Register</button>
        </div>
      </form>
    </section>
  );
}

export default NewsletterRegistration;
