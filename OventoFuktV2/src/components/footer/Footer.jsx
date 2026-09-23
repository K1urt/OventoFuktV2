import React from "react";
import "./Footer.css";
import FooterIcons from "../../data/FooterIcons";

const Footer = () => {
  const contactInfo = [
    {
      id: "phone",
      icon: FooterIcons["Phone"],
      label: "Växel:",
      value: "08-33 38 01",
      link: "tel:08333801",
    },
    {
      id: "location",
      icon: FooterIcons["Location"],
      label: "Adress:",
      value: "Gullmarsvägen 48A",
      link: "https://maps.google.com/?q=Gullmarsvägen+48A",
    },
    {
      id: "email",
      icon: FooterIcons["Email"],
      label: "E-post:",
      value: "Kontakt@oventofukt.se",
      link: "mailto:Kontakt@oventofukt.se",
    },
    {
      id: "time",
      icon: FooterIcons["Time"],
      label: "Öppettider:",
      value: "Måndag - Fredag: 07:30-16:30",
      isText: true,
    },
  ];

  return (
    <footer className="footer">
      <div className="footerContent">
        <div className="footerContactList">
          {contactInfo.map((item) => (
            <div
              key={item.id}
              className="footerItem">
              <img
                src={item.icon}
                alt=""
                className="footerIcon"
              />
              <div className="footerText">
                <span className="footerLabel">{item.label} </span>
                {item.link ? (
                  <a
                    href={item.link}
                    className="footerLink"
                    target={item.link.startsWith("http") ? "_blank" : undefined}
                    rel={item.link.startsWith("http") ? "noopener noreferrer" : undefined}>
                    {item.value}
                  </a>
                ) : (
                  <span className="footerValue">{item.value}</span>
                )}
              </div>
            </div>
          ))}
        </div>

        <p className="footerCopy">© 2026 Ovento Fukt AB</p>
      </div>
    </footer>
  );
};

export default Footer;