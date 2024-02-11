import { Checkbox } from "@material-tailwind/react";
import React from "react";
import { useState } from "react";

const Popup = () => {
    const [checked, setChecked] = useState(false);
    return (
        <div className="w-full h-full flex justify-center items-center mt-20 text-white">
            <div className="w-[50%]  border-black border-4 rounded-xl bg-black">
                <div className="text-6xl text-center w-full font-bold mt-5 mb-5">Some Rules before you start</div>
                <div className="h-2"></div>
                <ol className="list-decimal list-inside text-lg ml-6">
                    <li> Respect confidentiality: Avoid sharing personal details for research integrity.</li>
                    <li> Commit to session completion: Stay engaged until all processing.</li>
                    <li> Answer questions fully: Maximize session effectiveness by addressing inquiries.</li>
                    <li>Use "End Call" for closure: Terminate session if necessary by clicking button.</li>
                </ol>
                <div className="h-2"></div>
                <div className="text-6xl text-center w-full font-bold mt-5">IMPORTANT</div>
                <div className="h-2"></div>
                <ol className="list-decimal list-inside ml-6 mb-4">
                    <li> Kindly avoid sharing sensitive information, we won't be responsible in that case.</li>
                    <li> Kindly follow the code of conduct, any such activity won't be tolerated.</li>
                    <li> DO NOT CLOSE OR REFRESH THE TAB DURING THE SESSION.</li>
                    <li> Kindly agree to the terms and conditions to proceed further.</li>
                </ol>
                <span className="flex flex-row items-center align-middle text-center">
                    <input type="checkbox" className="m-2" checked={checked} onChange={(e) => setChecked(e.target.checked)} />
                    <button className="nav-button text-black" onClick={()=>{
                        if(checked){
                            alert("You have agreed to the terms and conditions");
                            
                        }
                        else{
                            alert("You need to agree to the terms and conditions to proceed further");
                        }
                    }}>Find a patient</button>
                </span>
            </div>


        </div>
    );
}

export default Popup;