//Project Files
import { ContactForm } from "../sections";

export default function Contact() {
  return (
    <div className="contact">
      <img src={"../assets/own.jpg"} alt="A woman entrepreneur" />
      <section className="time">
        <h3>Opening Hours</h3>
        <p>Monday to Saturday: 10:00 to 22:00</p>
        <p>Sunday: 10:00 to 18:00</p>
      </section>
      <ContactForm />
      <section className="address">
        <h3>We are located at</h3>
        <p>Level-1, Solna Centrum, Solna</p>
        <p>Stockholm</p>
      </section>
      <div className="map">
        <img
          src={"../assets/location.png"}
          alt="A screen shot of map showing Solna Centrum"
        />
      </div>
    </div>
  );
}
