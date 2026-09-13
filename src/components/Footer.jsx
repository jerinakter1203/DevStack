function Footer() {
  return (
    <footer className="footer">

      <div className="footer-brand">

        <div>
        <img src="/src/assets/logo-text.png" alt="Dev Stack" />
        </div>

        <p>
          Build and explore your ideal development stack
          with modern technologies.
        </p>

        <div className="footer-socials">
          <a href="#">GitHub</a>
          <a href="#">Twitter</a>
          <a href="#">LinkedIn</a>
        </div>

      </div>

      <div className="footer-links">

        <div>
          <h3>Product</h3>
          <a href="#">Technologies</a>
          <a href="#">Projects</a>
          <a href="#">Features</a>
        </div>

        <div>
          <h3>Company</h3>
          <a href="#">About</a>
          <a href="#">Contact</a>
          <a href="#">Careers</a>
        </div>

        <div>
          <h3>Legal</h3>
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
        </div>

      </div>

      <div className="footer-bottom">

        <p>© 2026 Dev Stack. All rights reserved.</p>

        <div>
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
        </div>

      </div>

    </footer>
  );
}

export default Footer;