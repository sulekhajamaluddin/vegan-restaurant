export default function Hero() {
  return (
    <section className="hero">
      <div>
        <h1>BEET BOWL</h1>
        <h2>LET'S GO THE VEGAN WAY!!!</h2>

        {/* Scenario A both lines have the same size */}
        <h1>
          World War II <br />
          The biggest conflict in hummanity
        </h1>

        {/* Scenario B */}
        {/* - B1 With Flex center */}
        <h1>World War II</h1>
        <span className="slogan">The biggest conflict in hummanity</span>

        {/* - B2 For Grid center */}
        <h1>
          <span className="first-line">World War II</span>
          <span className="second-line">The biggest conflict in hummanity</span>
        </h1>
      </div>
    </section>
  );
}
