import { useState } from "react"
import { Button } from "react-bootstrap";

export default function Form() {
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [num, setNum] = useState();
  return (
    <>
      <div className="form">
        <div>
          <h2>
            Like they say that our world is developing every minute but what about us, Are we developing ourselves and our surroundings?
            Development is not just about advanced tech but it’s also about ensuring that we keep environment around us healthy and safe for your loved ones.
            Our venture Garden Splash is all about the healthy development, we help you and your family breathe in a healthy environment</h2>
          <label><br></br>
            <input
              onChange={e => setName(e.target.value)}
              type="text" placeholder="Enter the full Name " />
          </label>

          <label><br></br>
            <input
              onChange={e => setMail(e.target.value)}
              type="text" placeholder="Enter Mail ID" />
          </label>

          <label><br></br>
            <input
              onChange={e => setNum(e.target.value)}
              type="text" placeholder="Enter the Phone Number " />
          </label>
          <button>Submit</button>
        </div>
      </div>

    </>
  )
}