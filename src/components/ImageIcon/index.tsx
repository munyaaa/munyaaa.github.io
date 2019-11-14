import React, { CSSProperties } from 'react'
import './style.scss'
import { NavLink } from 'react-router-dom'

interface Props {
    id?: String
    imgUrl : String
    route? : String
}

const ImageIcon : React.SFC<Props> = (props) => {
    const Style : CSSProperties = {
        backgroundImage: 'url(' + props.imgUrl + ')'
    }
    return (
        <div>
            <NavLink
                to={`${props.route}`}
                activeClassName="active"
                exact>
                <div className={`image-icon-container ${props.id}`}>
                    <div className="image-icon" style={Style}></div>
                </div>
            </NavLink>
        </div>
        
    )
}

export default ImageIcon