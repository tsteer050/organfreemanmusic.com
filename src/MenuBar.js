import React from 'react';
import { Link } from "react-router-dom";
import './menubar.css';

class MenuBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="menu-bar">
        <ul className="menu-bar-items">
          <Link to="/music">
            <li>
              <h1>Music</h1>
            </li>
          </Link>
          <Link to="/tour">
            <li>
              <h1>Tour</h1>
            </li>
          </Link>
          <Link to="/band">
            <li>
              <h1>Band</h1>
            </li>
          </Link>
          <li>
            <a href="https://organfreemanmusic.hilinemerchandising.com/">Store</a>
          </li>
          <Link to="/subscribe">
            <li>
              <h1>Subscribe</h1>
            </li>
          </Link>
          <Link to="/contact">
            <li>
              <h1>Contact</h1>
            </li>
          </Link>
        </ul>
      </div>
    )
  }
}

export default MenuBar;