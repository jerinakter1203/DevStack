function Navbar() {
  return (
    <nav>
        <img src="/src/assets/logo-text.png" alt="" />

      <div>
        <a href="#">Home</a>
        <a href="#">Technologies</a>
        <a href="#">Projects</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
      </div>

      <div>
        <button>Sign In</button>
        <button>Sign Up</button>
      </div>
    </nav>
  );
}

export default Navbar;