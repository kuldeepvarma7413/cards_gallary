import React from "react";
import './home.css'
import { NavLink } from "react-router-dom";

function Home({content}) {
    const menuItems = document.querySelectorAll(".menu_item");
    menuItems.forEach((item) => {
      item.addEventListener("click", function () {
        menuItems.forEach((item) => item.classList.remove("selected"));
        this.classList.add("selected");
      });
    });

  return (
    <div className="container">
      <div className="gallary-container">
        <p className="title">Apply</p>
        <div className="menu-label">
          <ul>
            <li className="selected menu_item"><NavLink to={'/personal'}>Personal</NavLink></li>
            <li className="menu_item"><NavLink to={'/business'}>Business</NavLink></li>
            <li className="menu_item"><NavLink to={'/discover'}>Discover</NavLink></li>
          </ul>
        </div>
        <div className="cards-container">
          {content}
        </div>
      </div>
    </div>
  );
}

export default Home;