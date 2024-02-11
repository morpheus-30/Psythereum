import React from "react";
import Navbar from "./Navbar";
import img from "/img.png";
import rings from "/rings.png";
import wallet from "/Wallet.png";
import { useNavigate } from "react-router-dom";

const Homepage = () => {
  const navigator = useNavigate();
  return (
    <div className=" flex flex-col justify-items-center items-center">
      <Navbar someList={["Get Started","About Us","How this works?","Pricing"]} onClick={()=>{
        navigator("/onboard");
      }} />
      <div className=" flex flex-col justify-items-center items-center m-8 w-80 h-60">
        <div className=" flex flex-col homepage">
          PSYTHEREUM
          <p className=" flex flex-col ">
            <span>Helps</span>
            Psychiatrists Researchers People
          </p>
        </div>
      </div>
      <div className="cards">
      <div className="card">
          <div>
              <img src={img} alt="" />
            </div>
            <div className=" text-3xl flex justify-center items-center w-72">We do not ask for your personal info! :)</div>
        </div>
        <div className="card">
          <div>
            <div className=" text-3xl flex justify-center items-center w-72">Millions of users already are using psythereum!</div>
            <div>
              <img src={rings} alt="" />
            </div>
            <div className="">
              <button className="get-button"><a href="/login">
                Get Started
                </a>
                </button>
            </div>
          </div>
        </div>
        <div className="card">
          <div>
            <img src={wallet} alt="" />
          </div>
          <div className="text-3xl flex justify-center items-center w-72">Safe payment via wallet</div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
