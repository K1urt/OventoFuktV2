import "./Form.css";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

const Form = () => {
  const form = useRef();
  const [statusMessage, setStatusMessage] = useState("");
  const [statusType, setStatusType] = useState(""); // "success" eller "error"
  const [isLoading, setIsLoading] = useState(false);

  const formLabels = {
    messageSent: "Tack! Ditt meddelande har skickats.",
    messageError: "Något gick fel. Försök igen senare.",
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setStatusMessage("");
    setStatusType("");

    emailjs
      .sendForm(import.meta.env.VITE_EMAILJS_SERVICE_ID, import.meta.env.VITE_EMAILJS_TEMPLATE_ID, form.current, {
        publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      })
      .then(
        () => {
          setStatusMessage(formLabels.messageSent);
          setStatusType("success");
          setIsLoading(false);
          form.current.reset();
        },
        (error) => {
          setStatusMessage(formLabels.messageError);
          setStatusType("error");
          setIsLoading(false);
          console.log("Hela felet från EmailJS:", error);
        },
      );
  };

  return (
    <div className="form">
      <h1 className="title h2">Kontakta oss</h1>
      <form
        ref={form}
        onSubmit={sendEmail}>
        {/* Dolt fält för EmailJS-titel */}
        <input
          type="hidden"
          name="title"
          value="Nytt meddelande från Ovento Fukt"
        />

        <div className="formGroup">
          <label htmlFor="name">Namn*</label>
          <input
            type="text"
            id="name"
            name="user_name"
            placeholder="Ditt namn"
            required
          />
        </div>

        <div className="formGroup">
          <label htmlFor="phone">Telefon</label>
          <input
            type="tel"
            id="phone"
            name="user_phone"
            placeholder="070-123 45 67"
          />
        </div>

        <div className="formGroup">
          <label htmlFor="email">E-post*</label>
          <input
            type="email"
            id="email"
            name="user_email"
            placeholder="din.epost@exempel.se"
            required
          />
        </div>

        <div className="formGroup">
          <label htmlFor="message">Meddelande*</label>
          <textarea
            id="message"
            name="message"
            rows="5"
            placeholder="Skriv ditt meddelande här..."
            required></textarea>
        </div>
        <div className="btnContainer">
          <button
            className="submitBtn"
            type="submit"
            disabled={isLoading}>
            {isLoading ? "Skickar..." : "Skicka"}
          </button>
        </div>
      </form>

      {/* Dynamisk klass (success/error) för snyggare styling i CSS */}
      {statusMessage && <p className={`statusMessage ${statusType}`}>{statusMessage}</p>}
    </div>
  );
};

export default Form;
