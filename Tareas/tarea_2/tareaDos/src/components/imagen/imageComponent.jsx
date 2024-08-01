import React from 'react'

export const Image = (props) => {
    console.log(props, 'props image')
    return (
        <div>
            <img src={props.image} alt="imagen" />
        </div>
    )
}
