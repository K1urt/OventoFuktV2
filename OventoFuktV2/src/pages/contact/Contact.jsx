import "./Contact.css";
import ContactInfo from "../../components/contactInfo/ContactInfo";
import Form from "../../components/form/Form";

// För att förbättra SEO och ge mer information om företaget, importerar vi komponenterna SEO och LocalBusinessSchema. Dessa komponenter används för att lägga till meta-taggar och strukturerad data på hemsidan, vilket kan hjälpa sökmotorer att bättre förstå innehållet och syftet med sidan.
import SEO from "../../components/SEO";
import LocalBusinessSchema from "../../components/LocalBusinessSchema";

const Contact = () => {
  return (
    <main className="page contact">
      <SEO
        title="Kontakta oss - Ovento Fukt AB"
        description="Misstänker du fukt eller mögel? Kontakta Ovento Fukt AB för fuktmätning, avfuktning eller statusbesiktning. Skicka ett meddelande så återkommer vi snabbt."
        path="/kontakt"
      />

      <LocalBusinessSchema />

      <Form />
      <ContactInfo />
    </main>
  );
};

export default Contact;
