import React from "react";
import logoMain from "../../images/logoMain.png";

const Navbar = () => {
  return (
    <div>
      <nav>
        <div className="container mx-auto px-20 p-3">
          <div className="all_nav flex items-center justify-between">
            <div className="nav_logo">
              <img src={logoMain} alt="" />
            </div>
            <div className="nav_list">
              <ul className="flex gap-9 text-gray-500 ">
                <li>Home</li>
                <li>About us</li>
                <li>Our Experts</li>
                <li>Sevices</li>
                <li>Blog</li>
                <li>Contact us</li>
              </ul>
            </div>
            <div className="nav_appointment_btn bg-primary">
              <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                Make an Appoinment
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
