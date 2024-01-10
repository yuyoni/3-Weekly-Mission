import facebook from "../assets/facebook.svg";
import instagram from "../assets/instagram.svg";
import twitter from "../assets/twitter.svg";
import youtube from "../assets/youtube.svg";
import "../css/Footer.css";

function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <span className="copyright">©codeit - 2023</span>
        <div className="link-box">
          <a className="privacy" href="/privacy">
            Privacy Policy
          </a>
          <a className="faq" href="/faq">
            FAQ
          </a>
        </div>
        <div className="sns-logo-box">
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={facebook} alt="facebook" />
          </a>
          <a
            href="https://www.twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={twitter} alt="twitter" />
          </a>
          <a
            href="https://www.youtube.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={youtube} alt="youtube" />
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={instagram} alt="instagram" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;