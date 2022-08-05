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
        <h4> If you have an empty space at your place, let us help you by taking you on a beautiful journey and turning the void space into a beautiful garden.
          You wield the power to beautify your green space by making garden space as your tool in the process.</h4>
      </div>
    </>
  )
}