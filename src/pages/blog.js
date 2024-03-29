import React from 'react'
import Layout from '../Components/Layout'
import {graphql, useStaticQuery} from 'gatsby'


const BlogPage = () => {

    const data = useStaticQuery(graphql`
    query {
        allMarkdownRemark {
          edges {
            node {
              frontmatter {
                title
                date
              }
            }
          }
        }
      }
    `)

    return(
        <Layout title="Blog">
            <h1>All Blog Post will appear here !!</h1>
            {/* <ol>
               {
                   data.allMarkdownRemark.edges.map(edge => {
                       return(
                           <li>
                               <h2>{edge.node.frontmatter.title}</h2>
                               <p>{edge.node.frontmatter.date}</p>
                           </li>
                       )
                   })
               }
            </ol> */}
        </Layout>
    )
}

export default BlogPage