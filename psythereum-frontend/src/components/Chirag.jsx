import React from 'react'
import Navbar from './Navbar'

export default function Chirag() {
  return (
    <div>
        <Navbar someList={["Previous Sessions","Terms and conditions","Rules"]}/>
        <div>
            <div 
            className='text-9xl pt-20 pl-10'
            >Start your Journey of <br/>helping millions of <br/>people now.</div>
            <button className="p-2 ml-20 mt-10 font-semibold text-xl border">Find a patient</button>
        </div>
    </div>
  )
}
