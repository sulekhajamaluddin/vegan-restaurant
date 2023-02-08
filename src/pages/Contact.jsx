//Project Files
import { ContactForm, Map } from "../components";

export default function Contact() {
  return (
    <div className="contact">
      <img src={"../assets/own.jpg"} alt="A woman entrepreneur" />
      <section className="working-hours">
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
      <section className="map-container">
        <Map />
      </section>
    </div>
  );
}
