import React from "react";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";

const PsychiatristDashboard = () => {
    const navigate = useNavigate();
    return (
        <div>
            <Navbar someList={["Previous Sessions", "Terms and Conditions", "Rules"]} />
            <div>
                <div
                    className='text-9xl pt-20 pl-10 font-bold'
                >Need Help? <br />Let us find you a<br />psychiatrist.</div>
                <button className="p-2 ml-20 mt-10 font-semibold text-xl border border-black" onClick={()=>{
                    navigate("/popup",{replace:true});
                }}>Let's Find</button>
            </div>
        </div>
    );
}

export default PsychiatristDashboard;