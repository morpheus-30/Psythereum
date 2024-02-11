import React from 'react'
import { useNavigate } from 'react-router-dom';

const Onboarding = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className='flex justify-center items-center flex-col'>
        <div className=' text-7xl font-bold mb-16 mt-40'>
          Are you a?
        </div>
        <div className="cards" >
          <div className="card" onClick={() => {
            navigate("/login", { state: "patient" , replace:true});
          }}>
            <div className=" text-3xl flex justify-center items-center w-72 h-48 flex-col" >I want consultency <p>
              (Patient)
            </p>
            </div>
          </div>
          <div className="card" onClick={() => {
            navigate("/login", { state: "researcher" , replace:true});
          }}>
            <div>
              <div className=" text-3xl flex justify-center items-center w-72 flex-col">I want data
                <p>
                  (Researcher)
                </p>
              </div>
            </div>
          </div>
          <div className="card" onClick={() => {
            navigate("/login", { state: "psychiatrist" , replace:true});
          }}>
            <div className="text-3xl flex justify-center items-center w-72 flex-col">I give consultency
              <p>
                ( Psychiatrist)
              </p>
            </div>
          </div>
        </div>
      </div>

    </>
  );
};

export default Onboarding;