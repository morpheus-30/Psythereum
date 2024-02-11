import React from "react";
import Navbar from "./Navbar";

const ResearcherDashboard = () => {
    return (
        <div>
            <Navbar someList = {["Saved sessions","Terms and Conditions","Logout"]}/>
            <div>
                <div
                    className='text-9xl pt-20 pl-10 font-bold'
                >Condensing valuable <br />insights from <br />numerous psychiatrist <br/>session data. </div>
                <button className="p-2 ml-20 mt-10 font-semibold text-xl border border-black">Let's Dive into the pool of Data</button>
            </div>
        </div>
    );
}

export default ResearcherDashboard;
