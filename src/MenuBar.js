import React from 'react';

class MenuBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="menu-bar">
        <ul className="menu-bar-items">
          <li>
            <h1>Music</h1>
          </li>
          <li>
            <h1>Tour</h1>
          </li>
          <li>
            <h1>Band</h1>
          </li>
          <li>
            <h1>Store</h1>
          </li>
          <li>
            <h1>Subscribe</h1>
          </li>
          <li>
            <h1>Contact</h1>
          </li>
        </ul>
      </div>
    )
  }
}

export default MenuBar;