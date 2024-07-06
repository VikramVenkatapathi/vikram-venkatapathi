import React from "react";
import GmailIcon from '../Components/images/gmail-icon-2048x1535-imnstrko.png';
import CalendlyIcon from '../Components/images/calendly.png';


function Contact() {
  
  const handleEmailClick = () => {
    window.location.href = "mailto:vikramvenkatapathi@gmail.com";
  };

  const handleCalendlyClick = () => {
    window.open("https://calendly.com/vikramvenkatapathi/virtual-vibes", "_blank");
  };

  return (
    <section id="contact" className="contact section-bg">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2 style={{ fontWeight: "bold", color: "rgba(255, 255, 255, 0.8)" }}>Contact</h2>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>
            <button type="button" onClick={handleEmailClick} style={{ backgroundColor: '#FFD700', color: "#000", padding: '10px', display: 'flex', alignItems: 'center', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)', borderRadius: '5px', cursor: 'pointer' }}>
              <img src={GmailIcon} alt="Gmail Icon" style={{ width: '50px', marginRight: '10px' }} />
              Email
            </button>
            <button type="button" onClick={handleCalendlyClick} style={{ backgroundColor: '#FFD700', color: "#000", padding: '10px', display: 'flex', alignItems: 'center', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)', borderRadius: '5px', cursor: 'pointer' }}>
              <img src={CalendlyIcon} alt="Calendly Icon" style={{ width: '50px', marginRight: '10px' }} />
              Calendly
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
