import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import '../styles/index.scss'
import layoutStyles from './layout.module.scss'
import imageme from '../images/me.jpg'

const Layout = (props) => {
    return(
        <div className={layoutStyles.container}>
            <div>
            <img className={layoutStyles.profilePic} src={imageme} alt="My Image"></img>
            </div>
            <div className={layoutStyles.content}>
            <Header name={props.title}/>
            {props.children}
            </div>
            <Footer />
        </div>
        
    )
}

export default Layout