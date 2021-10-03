import Link from "next/link";
import * as style from "../styles/common.module.scss"

export const Footer = () => {
    return(
        <footer className={style.footerWrapper}>
            <div className={style.insideContainer}>
                <a href="https://www.google.com/"><img src="/images/github.svg" alt="log"/></a>
                <a href="https://www.google.com/"><img src="/images/linkedin.svg" alt="log"/></a>
                <a href="https://www.google.com/"><img src="/images/twitter.svg" alt="log"/></a>
                <a href="https://www.google.com/"><img src="/images/facebook.svg" alt="log"/></a>
                <hr/>
                <Link href="/blog"><a>Blog</a></Link>
                <Link href="/contact"><a>Contact</a></Link>
                <p>©{new Date().getFullYear()}Abe Hiroki</p>
            </div>
        </footer>
    )
}
export default Footer