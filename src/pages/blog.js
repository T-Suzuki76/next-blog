import Link from "next/link"
import Image from "next/image"
import { Layout } from "../components/layout"
import * as style from "../styles/blog.module.scss"
import { getAllBlogs, blogsPerPage } from "../utils/mdQueries"
import Pagination from "../components/pagination"

const Blog = ({blogs,numberPages}) => {
    return(
        <Layout>
            <div className={style.wrapper}>
                <div className={style.container}>
                    <h1>Blog</h1>
                    <p>エンジニアの日常生活をお届けします</p>
                    {blogs.map((blog, index)=>{
                        const {title,date,exerpt,image} = blog.frontmatter
                        return(
                        <div key={index} className={style.blogCard}>
                            <div className={style.textContainer}>
                                <h3>{title}</h3>
                                <p>{exerpt}</p>
                                <p>{date}</p>
                                <Link href={`/blog/${blog.slug}`}><a>Read More</a></Link>
                            </div>
                            <div className={style.cardImg}>
                                <Image src={image} alt="card-image" height={300} width={1000} quality={90}/>
                            </div>
                        </div>
                    )}
                    )}
                </div>
                <Pagination numberPages={numberPages}/>
            </div>
        </Layout>
    )
}

export default Blog
export async function getStaticProps() {
    const {orderedBlogs, numberPages} = await getAllBlogs()
    const limitedBlogs = orderedBlogs.slice(0, blogsPerPage)

    return {
        props: {
            blogs: limitedBlogs,
            numberPages: numberPages,
        },
    }
}