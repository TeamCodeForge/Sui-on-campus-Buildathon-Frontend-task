import Image from "next/image"
import Leftbar from "./components/Leftbar"
import Centerbar from "./components/Centerbar"
import Rightbar from "./components/Rightbar"

const Homepage = () => {
  return (
    <div className="main-flex-container">
      <Leftbar />
      <Centerbar />
      <Rightbar />
    </div>
  )
}

export default Homepage