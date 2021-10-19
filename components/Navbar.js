import React, { useState } from 'react';
import navItems from './navItems';

const Navbar = (props) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="navigation">
        <ul>
          {navItems.map((item) => (
            <li key={item.title}>
              <a href={item.path}>
                <span className="icon">{item.icon}</span>
                <span className="title">{item.title}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Navbar;
