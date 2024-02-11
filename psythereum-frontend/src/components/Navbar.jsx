import React from "react";

const Navbar = (props) => {
  return (
    <div className=" flex justify-center mt-2">
      <nav className="nav">
        <div>
          <h1 className="Navbar-logo">Psythereum</h1>
        </div>
        <ul className=" flex justify-items-center ">
          {/* <li className=" ml-6 mr-2  text-lg w-36">
            <a href="">Get Started</a>
          </li>
          <li className=" ml-6 mr-2 text-lg w-36"><a href="/about">About us</a></li>
          <li className=" ml-6 mr-2 text-lg w-36"><a href="">How this works?</a></li> */}
          {props.someList.map((item) => {
            return <li className=" ml-6 mr-2 text-lg w-36"><a href="/about">{item}</a></li>})}
          </ul>
        <div className="nav-button">
          <button onClick={props.onClick}>Login/Singup</button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
