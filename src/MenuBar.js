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
              <h5>Music</h5>
            </li>
          </Link>
          <Link to="/tour">
            <li>
              <h5>Tour</h5>
            </li>
          </Link>
          <Link to="/band">
            <li>
              <h5>Band</h5>
            </li>
          </Link>
          <li>
            <a href="https://organfreemanmusic.hilinemerchandising.com/"><h5>Store</h5></a>
          </li>
          <Link to="/subscribe">
            <li>
              <h5>Subscribe</h5>
            </li>
          </Link>
          <Link to="/contact">
            <li>
              <h5>Contact</h5>
            </li>
          </Link>
        </ul>
      </div>
    )
  }
}

export default MenuBar;