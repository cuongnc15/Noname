
import { useRef, useState } from "react";
import "./contact.css"
const Contact = () => {
  const nameInputRef = useRef<HTMLInputElement>(null);
  const emailInputRef = useRef<HTMLInputElement>(null);
  const msgInputRef = useRef<HTMLTextAreaElement>(null);
  const [errName, setErrName] = useState("");
  const [errEmail, setErrEmail] = useState("");
  const [errMessage, setErrMessage] = useState("");

  const validateForm = () => {
    const name = nameInputRef.current && nameInputRef.current.value;
    const email = emailInputRef.current && emailInputRef.current.value;
    const message = msgInputRef.current && msgInputRef.current.value;
    let msg = {
      nameInput: '',
      emailInput: '',
      messageInput: '',
    };
    const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (name && name.trim().length === 0 ) {
      msg.nameInput = "*Please enter your name";
      nameInputRef.current.focus();
    } else if (name && name.trim().split(" ").length < 2) {
      msg.nameInput = "*Please enter your full name (both first and last)";
    }
    if (email && email.trim().length === 0) {
      msg.emailInput = "*Please enter your email";
    } else if (email && !email.match(mailformat)) {
      msg.emailInput = "*Please enter a valid email address";
    }
    if (message && message.trim().length === 0) {
      msg.messageInput = "*Please share something";
    }
    setErrEmail(msg.emailInput);
    setErrName(msg.nameInput);
    setErrMessage(msg.messageInput);
    if (Object.keys(msg).length > 0) {
      return false;
    } else return true;
  };
  const submitHandler = (event: any) => {
    event.preventDefault();
    validateForm();
  };
  return (
    <main className="contact">
      <div className="contact__bgr"></div>
      <div className="container">
        <div className="contact__message">
          <h3>Get In Touch</h3>
          <form onSubmit={submitHandler}>
            <div className="mg">
              <label className="form__label" htmlFor="name">
                Your full name
              </label>
              <input className="form__input" type="text" ref={nameInputRef} />

              <p className="form__errorMsg">{errName}</p>
            </div>
            <div className="mg">
              <label className="form__label" htmlFor="email">
                Your email
              </label>
              <input className="form__input" type="text" ref={emailInputRef} />

              <p className="form__errorMsg">{errEmail}</p>
            </div>
            <div className="mg">
              <label className="form__label" htmlFor="message">
                Message
              </label>
              <textarea className="form__input" ref={msgInputRef} />
              <p className="form__errorMsg">{errMessage}</p>
            </div>
            <button type="submit" className="form__submit__btn">
              Send
            </button>
          </form>
        </div>
        <div className="contact__address">
          <div className="contact__city">
            <h3>New York</h3>
            <p>203 Fake St. Mountain View, San Francisco, California, USA</p>
          </div>
          <div className="contact__city">
            <h3>Lon Don</h3>
            <p>203 Fake St. Mountain View, San Francisco, California, USA</p>
          </div>
          <div className="contact__city">
            <h3>Canada</h3>
            <p>203 Fake St. Mountain View, San Francisco, California, USA</p>
          </div>
        </div>
      </div>
    </main>
  );
};
export default Contact;
