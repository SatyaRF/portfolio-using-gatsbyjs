import React from "react"
import Layout from '../Components/Layout'
import layoutStyles from '../Components/layout.module.scss'

const IndexPage = () => {
    return(
        <Layout title="Satyadeep Sharma">
            <p className={layoutStyles.para}>I am a senior associate having 4+ years of experience, in which for two and half years I worked on
                National Electronic Toll Collection Project. Due to my love for the web I shifted as frontend developer. Having knowledge of HTML,  
                CSS, JavaScript and libraries / frameworks like jQuery, React, Gatsby, Node JS, Bootstrap, Less, SCSS and Webpack for building highly performant and scalable web applications.
                Also worked with JAVA, Struts, J2EE, PostgreSQL, MongoDB, GraphQL.
            </p>
        </Layout>
    )
}
export default IndexPage