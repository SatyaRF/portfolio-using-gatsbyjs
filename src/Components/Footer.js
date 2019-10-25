import React from 'react'
import {graphql, useStaticQuery} from 'gatsby'
import layoutStyles from '../Components/layout.module.scss'

const Footer = () => {

    const data = useStaticQuery(graphql`
    query {
        site{
          siteMetadata 
          {
          author
            }
          }
      }
    `)

    return(
        <footer className={layoutStyles.layoutFoot}>
            Copyright © 2019 {data.site.siteMetadata.author} · Powered by Gatsby JS ❤️
        </footer>
    )
}

export default Footer