import React from 'react';
import './footer.css';

class Footer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="footer-div">
        <ul className="footer-icons">
          <li>
            <a href="https://www.facebook.com/OrganFreemanMusic/">
              <i class="fab fa-facebook-f"></i>
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/organfreemanmusic/">
              <i class="fab fa-instagram"></i>
            </a>
          </li>
          <li>
            <a href="https://twitter.com/organ_freeman">
              <i class="fab fa-twitter"></i>
            </a>
          </li>
          <li>
            <a href="https://music.apple.com/us/artist/organ-freeman/1063765303">
              <i class="fab fa-itunes-note"></i>
            </a>
          </li>
          <li>
            <a href="https://open.spotify.com/artist/5y8QnEvg0nO3NwMRR0U2Ux">
              <i class="fab fa-spotify"></i>
            </a>
          </li>
        </ul>
      </div>
    );
  }
}

export default Footer;