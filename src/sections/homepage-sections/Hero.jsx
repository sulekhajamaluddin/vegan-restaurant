export default function Hero() {
  return (
    <section className="hero">
      <div>
        {/* dont use upercase, use CSS to change the text case */}
        {/* dont use a h2, this is a slogan not a subtitle */}
        <h1>
          <span className="first-line">Beetbowl</span>
          <span className="second-line">Let's go vegan</span>
        </h1>
      </div>
    </section>
  );
}
