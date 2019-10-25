import React from 'react'
import {Link, graphql, useStaticQuery} from 'gatsby'
import headerStyles from './header.module.scss'


const Header = (props) => {

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
        <header className={headerStyles.header}>
            <title>{props.name}</title>
            <h1>
                <Link className={headerStyles.title} to="/">
                    {data.site.siteMetadata.author}
                </Link>
            </h1>
            <nav>
                <ul className={headerStyles.navList}>
                    <li>
                        <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/">About</Link>
                    </li>
                    <li>
                        <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/blog">Blog</Link>
                    </li>
                    <li>
                        <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/contact">Contact</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header