function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1><strong>
          Build Your
          <span> Ideal Development Stack</span>
          </strong>
        </h1>

        <p>
          Choose the right technologies, build your stack,
          and create amazing digital experiences.
        </p>

        <div className="hero-buttons">
          <button>Explore Technologies</button>
          <button>Learn More</button>
        </div>
      </div>

      <div className="hero-image">
        <img src="/src/assets/banner-stack.png" alt="Development Stack" />
      </div>
    </section>
  );
}

export default Hero;