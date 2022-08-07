import Land from "../Assets/landscape.jpg"
import Flower from "../Assets/flower.jpg"
import pot from "../Assets/pot.jpg"
import lawns from "../Assets/lawns.jpg"
import mower from "../Assets/mower.jpg"
import "./Comp.css"

export default function Services() {
  return (
    <>
      <div className="serv">
        <h1 style={{marginBottom:"2%"}}>OUR SERVICES</h1>
        <div>
          <section>
            <fig>
            <img src={mower} width={"100%"} />
            </fig>
            <h1>Landscaping</h1>
          </section>
          <section>
            <fig>
            <img src={Flower} width={"100%"} />
            </fig>
            <h1>Flowers</h1>
          </section>
          <section>
            <fig>
            <img src={pot} width={"100%"} />
            </fig>
            <h1>Flower Pots</h1>
          </section>
          <section>
            <fig>
            <img src={lawns} width={"100%"} />
            </fig>
            <h1>Laying of new lawn</h1>
          </section>
          {/* <section>
            <fig>
            <img src={mower} width={"100%"} />
            </fig>
            <h1>Lawn Maintenance</h1>
          </section> */}
          {/* <section>
            <img src="" width={"100%"} />
            <h1>Lawn Maintanance</h1>
          </section>
          <section>
            <img src="" width={"100%"} />
            <h1>Water Bodies</h1>
          </section> */}
        </div>
      </div>
    </>
  )
}