import React from "react";
import "./Contact.css";
import ContactInfo from "../../components/contactInfo/ContactInfo";
import Form from "../../components/form/Form";
const Contact = () => {
  return (
    <div className="page contact">
      <Form />
      <ContactInfo />
    </div>
  );
};

export default Contact;
