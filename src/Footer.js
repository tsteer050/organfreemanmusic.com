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
            <i class="fab fa-facebook"></i>
          </li>
          <li>
            <i class="fab fa-instagram"></i>
          </li>
          <li>
            <i class="fab fa-twitter"></i>
          </li>
          <li>
            <i class="fab fa-itunes-note"></i>
          </li>
          <li>
            <i class="fab fa-spotify"></i>
          </li>

        </ul>
      </div>
    );
  }
}

export default Footer;