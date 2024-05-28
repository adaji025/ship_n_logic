import { Route, Routes } from "react-router-dom"
import About from "../../pages/Unautheticated/About"

const Unauthenticated = () => {
  return (
    <Routes>
      <Route path="/" element={<About />} />
    </Routes>
  )
}

export default Unauthenticated
