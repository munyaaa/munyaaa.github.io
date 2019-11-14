import React from 'react'
import './style.scss'

interface Props {
    Type: string
    Data: string
    Url: string
}

const Icon : React.SFC<Props> = (props) => {
    const Style : string = `${props.Type} fa-${props.Data} icon`
    return (
        <a href={props.Url}>
            <i className={Style}></i>
        </a>
    )
}

export default Icon