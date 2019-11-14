import React from 'react'
import './style.scss'
import ImageIcon from '../ImageIcon'
// import logo from '/images/logo.png'

const  Navbar : React.FC = () => {
    return(
        <div className="navbar">
            <div className="navbar-item">
                <ImageIcon id="logo" imgUrl="/images/logo.png"/>
            </div>
            <div className="navbar-item blank"></div>
            <div className="navbar-item">
                <ImageIcon route ="/" imgUrl="/images/contact.png"/>
                <ImageIcon route ="/experiences" imgUrl="/images/team.png"/>
                <ImageIcon route ="/skills" imgUrl="/images/skills.png"/>
                <ImageIcon route ="/projects" imgUrl="/images/innovation.png"/>
            </div>
            
        </div>
    )
}

export default Navbar