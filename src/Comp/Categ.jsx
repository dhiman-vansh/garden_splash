import tgarden from "../Assets/tgarden.jpg"
import water from "../Assets/water.jpg"


export default function Categ(props) {
  return (
    <>
      <div className="categ">
        <div>
          <section>
            <fig>
              <img src={tgarden} width="100%"></img>
            </fig>
          </section>
          <section>
            <h1>TERRACE FARMING</h1>
            <h4>Adantages - </h4>
            <ol>
              <li>Helps in reducing the indoor temperature by 6 to 8 degrees which also reduces the cost of air conditioning.</li>
              <li>Reduces the heat absorption in buildings and insulate them against heat and cold.</li>
              <li>Increases the amount of oxygen in air.</li>
              <li>Promotes organic plantation with pesticide – free vegetables.</li>
            </ol>
          </section>
        </div>

        <div>
          <section>
            <h1>WATER BODIES</h1>
            <h4>Advantages -</h4>
            <ol>
              <li>Helps reducing stress.</li>
              <li>Absorbs heat.</li>
              <li>Gives premium look to your place</li>
            </ol>

          </section>
          <section>
            <fig>
              <img src={water} width="100%"></img>
            </fig>
          </section>

        </div>

      </div>
    </>
  )
}