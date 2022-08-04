import vid from "../Assets/garden.mp4"
import mobile from "../Assets/mobile.mp4"
import "./Comp.css"

export default function Vid() {
  return (
    <>
      <div className="vid">
        <video id="pc"
          // controls
          width={"100%"}
          height="100%"
          autoPlay muted
          loop
          src={vid}></video>
        <video id="mob"
          // controls
          width={"100%"}
          height="100%"
          autoPlay muted
          loop
          src={mobile}></video>
      </div>
      <div className="vid-text">
        <h1>We Help Gardens Thrive!</h1>
        <h4>We're a Maine-based nonprofit providing grants, crowdfunding opportunities and training to food garden projects across the country and around the world.</h4>
      </div>
    </>
  )
}