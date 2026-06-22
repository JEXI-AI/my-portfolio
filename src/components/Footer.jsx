import './Footer.css';

function Footer({ ownerName }) {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="footer__container">
        <p>&copy; {currentYear} {ownerName}. All Rights Reserved.</p>
        <p className="footer__subtext">Built with ⚛️ React &amp; Vite</p>
      </div>
    </footer>
  );
}

export default Footer;