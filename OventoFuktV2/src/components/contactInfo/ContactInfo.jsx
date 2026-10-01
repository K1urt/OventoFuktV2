import "./ContactInfo.css";
import ContactIcons from "../../data/ContactIcons";;
import { NavBtnTeam } from "../buttons/Buttons";
const ContactInfo = () => {
  const contactInfo = [
    {
      id: "location",
      icon: ContactIcons["Location"], // Eller vad ikonen heter i din ContactIcons-fil
      label: "Adress",
      value: "Gullmarsvägen 48A",
      link: "https://maps.google.com/?q=Gullmarsvägen+48A",
    },
    {
      id: "phone",
      icon: ContactIcons["Phone"],
      label: "Växel",
      value: "08-33 38 01",
      link: "tel:+468333801",
    },
    {
      id: "email",
      icon: ContactIcons["Mail"],
      label: "E-post",
      value: "Kontakt@oventofukt.se",
      link: "mailto:kontakt@oventofukt.se",
    },
    {
      id: "time",
      icon: ContactIcons["Time"],
      label: "Öppettider",
      value: "Måndag-Fredag 07:30-16:30",
    },
    {
      id: "org",
      icon: ContactIcons["Organization"],
      label: "Org.nr",
      value: "559482-0770",
    },
  ];

  return (
    <div className="contactInfo">
      <div>
        <h2 className="title h2">Våra kontaktuppgifter</h2>
        <p>Ring oss eller skicka ett mejl för att få hjälp eller boka en tid!</p>
      </div>

      {contactInfo.map((item) => (
        <div
          className="infoRow"
          key={item.id}>
          {item.icon && (
            <img
              src={item.icon}
              alt=""
            />
          )}
          <p>{item.label}:</p>
          {item.link ? (
            <a
              href={item.link}
              target={item.link.startsWith("http") ? "_blank" : undefined}
              rel={item.link.startsWith("http") ? "noopener noreferrer" : undefined}>
              {item.value}
            </a>
          ) : (
            <p>{item.value}</p>
          )}
        </div>
      ))}
      <div className="btnContainer">
        <NavBtnTeam />
      </div>
    </div>
  );
};

export default ContactInfo;
