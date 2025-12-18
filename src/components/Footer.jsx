// src/components/Footer.jsx
function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <p>© {year} Shubhaam Logistics. All rights reserved.</p>
        <p>Designed and developed for practice in React & Vite.</p>
      </div>
    </footer>
  );
}

export default Footer;
