import { Route, Routes } from "react-router-dom"
import About from "../../pages/Unautheticated/About"
import Privacy from "../../pages/Unautheticated/Privacy"
import Terms from "../../pages/Unautheticated/Cookie"
import Cookie from "../../pages/Unautheticated/Terms"
import Login from "../../pages/Unautheticated/Auth/Login"

const Unauthenticated = () => {
  return (
    <Routes>
      <Route path="/" element={<About />} />
      <Route path="/sign-in" element={<Login />} />
      <Route path="/privacy-policy" element={<Privacy />} />
      <Route path="/terms-of-use" element={<Terms />} />
      <Route path="/cookie-privacy" element={<Cookie />} />
    </Routes>
  )
}

export default Unauthenticated
