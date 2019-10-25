import React from 'react'
import Layout from '../Components/Layout'
import layoutStyles from '../Components/layout.module.scss'


const ContactPage = () => {
    return(
        <Layout title="Contact Me">
            
            <nav className={layoutStyles.mainnav}>
            <h4>Get in touch</h4>
                <ul className={layoutStyles.mainList}>
                    <li className={layoutStyles.mainli}><a href="https://twitter.com/satya_rf_sharma" target="_blank">@twitter</a></li>
                    <li className={layoutStyles.mainli}><a href="https://in.linkedin.com/in/satyadeep-sharma-341418131" target="_blank">@linkedin</a></li>
                    <li className={layoutStyles.mainli}><a href="https://github.com/SatyaRF" target="_blank">@github</a></li>
                </ul>
            </nav>
        </Layout>
    )
}

export default ContactPage