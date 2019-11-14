import React from 'react'
import './style.scss'

const Page : React.FC = ({children}) => {
    return (
        <div className="Page">
            {children}
        </div>
    )
}

export default Page