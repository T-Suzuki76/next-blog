import { Layout } from "../components/layout"
import SEO from "../components/seo"
import * as style from "../styles/contact.module.scss"

const Contact = () => {
    return(
        <Layout>
            <SEO title="コンタクト" description="これはコンタクトページです"/>
            <div className={style.wrapper}>
                <div className={style.container}>
                    <h1>Contact</h1>
                    <p>お気軽にご連絡ください</p>
                    <form
                        action="https://formspree.io/f/xleavnbe"
                        method="POST"
                    >
                        <label>
                            Your email:
                            <input type="email" name="_replyto"/>
                        </label>
                        <label>
                            Your message:
                            <textarea name="message"></textarea>
                        </label>
                        <button type="submit">Send</button>
                    </form>
                </div>
            </div>
        </Layout>
    )
}

export default Contact