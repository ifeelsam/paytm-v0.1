
import { Signup } from "./pages/Signup"
import { Signin } from "./pages/Signin"
import './App.css'
import { useState } from "react"
import { Dashboard } from "./pages/Dashboard"

function App() {
  return (
    <>
      <Signup></Signup>
      <Signin></Signin>
      <Dashboard></Dashboard>
    </>
  )
}

export default App