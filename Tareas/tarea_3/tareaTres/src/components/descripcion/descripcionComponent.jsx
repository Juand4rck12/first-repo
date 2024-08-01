import React from 'react'

export const Descripcion = (props) => {
    console.log(props, 'props descripcion')
    return (
        <div>
            <p>
                {props.descripcion}
            </p>
        </div>
    )
}
