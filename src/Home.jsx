import Nav from "./Comp/Nav";
import Vid from "./Comp/Vid";
import Categ from './Comp/Categ';
import Services from './Comp/Services';
import Foot from "./Comp/Foot"
import Form from "./Comp/Form";

export default function Home() {
    return (
        <>
            <Nav />
            <Vid />
            <Categ />
            <Services />
            <Form />
            <Foot />
        </>
    )
}