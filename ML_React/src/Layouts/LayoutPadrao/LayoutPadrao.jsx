import { Outlet } from "react-router";
import { Navbar, Footer, Conteudo } from "../../Components";

const LayoutPadrao = () => {
    return (
        <>
            <Navbar />
            <Conteudo>
                <Outlet />
            </Conteudo>
            <Footer />
        </>
    )
}

export { LayoutPadrao };