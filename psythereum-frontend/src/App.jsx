import { useState } from 'react'
import Homepage from './components/Homepage'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import Onboarding from './components/Onboarding'
import Register from './components/Register'
import LoginPage from './components/LoginPage'
import Chirag from './components/Chirag'
import PsychiatristDashboard from './components/UserDashboard'
import ThankYou from './components/ThankYou'
import WaitWhileWeFinish from './components/WaitWhileWeFinish'
import Popup from './components/Popup'
import ResearcherDashboard from './components/ResearcherDashboard';
import PsyVerify from './components/PsyVerify';

function App() {
  const [count, setCount] = useState(0)

  return (

    <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<Homepage />} />
      <Route exact path="/onboard" element={<Onboarding/>}/>
      {/* { user.isloggedin===true? <Route exact path="/user" element={<UserFeed />} />:null} */}
      <Route exact path="/Login" element={<LoginPage />} />
      <Route exact path="/Register" element={<Register />} />
      <Route exact path="/chirag" element={<Chirag/>} /> 
        <Route exact path="/Login" element={<LoginPage />} />
        <Route exact path="/Register" element={<Register />} />
        <Route exact path="/userDashboard" element={<PsychiatristDashboard />} />
        <Route exact path="/thankYou" element={<ThankYou />} />
        <Route exact path="/waitWhile" element={<WaitWhileWeFinish />} />
        <Route exact path="/popup" element={<Popup />} />
        <Route exact path="/resDashboard" element={<ResearcherDashboard />} />
        <Route exact path="/psyverify" element={<PsyVerify />} />
        {/* <Route exact path="/psydetails" element={<PsychiatristForm />} /> */}
      </Routes>
    </BrowserRouter>
  )
}

export default App
