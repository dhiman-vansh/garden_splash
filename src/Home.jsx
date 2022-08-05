import Nav from "./Comp/Nav";
import Vid from "./Comp/Vid";
import Categ from './Comp/Categ';
import Services from './Comp/Services';
import Foot from "./Comp/Foot"

export default function Home() {
    return (
        <>
            <Nav />
            <Vid />
            <Categ />
            <Services />
            <Foot />
        </>
    )
}