// src/components/Navbar.jsx
function Navbar() {
  return (
    <header className="navbar">
      <div className="container nav-inner">
        <div className="nav-logo">Shubhaam Logistics</div>
        <nav>
          <a href="#home">Home</a>
          <a href="#services">Services</a>
          <a href="#industries">Industries</a>
          <a href="#about">About</a>
          <a href="#contact" className="btn-primary">Contact</a>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
