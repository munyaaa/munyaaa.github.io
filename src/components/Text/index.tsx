import React, { CSSProperties } from 'react'
import './style.scss'

interface Props {
    content : string
    color: string
    fontSize: string
    fontWeight: number
    stroke? : string
}

const Text : React.SFC<Props> = (props) => {
    const Style : CSSProperties = {
        color : props.color,
        fontSize : props.fontSize,
        fontWeight : props.fontWeight,
        WebkitTextStroke : props.stroke
    }
    return(
        <div>
            <span className="text" style={Style}>{props.content}</span>
        </div>
    )
}

export default Text