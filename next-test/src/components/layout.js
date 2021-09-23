import { Header } from "./header";
import { Footer } from "./footer";

export const Layout = (props) => {
    return(
        <>
            <Header/>
            <main>{props.children}</main>
            <Footer/>
        </>
    )
}