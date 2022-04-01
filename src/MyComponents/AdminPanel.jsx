import React from 'react';
import {Link} from "react-router-dom";


export default function AdminPanel() {
  return <>
    <div className="header" style = {{backgroundImage: `url(${img1})`}}></div>
    <div>
        <p>List Based</p>
        <Nav>
          <NavItem>
            <NavLink href="#">Add an item</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">My Purchases</NavLink>
          </NavItem>
        </Nav>
        <hr />
        <p>Link Based</p>
        <Nav>
          <NavLink href="#">Link</NavLink> <NavLink href="#">Link</NavLink> <NavLink href="#">Another Link</NavLink> <NavLink disabled href="#">Disabled Link</NavLink>
        </Nav>
      </div>

</>
}
