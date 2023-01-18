//Project Files
import { ContactForm } from "../sections";

export default function Contact() {
  return (
    <div className="contact">
      <img src={"../assets/entrepreneur2.png"} alt="A woman entrepreneur" />
      <section className="time">
        <h3>Opening Hours</h3>
        <p>Monday to Saturday: 10:00 to 22:00</p>
        <p>Sunday: 10:00 to 18:00</p>
      </section>
      <ContactForm />
    </div>
  );
}
