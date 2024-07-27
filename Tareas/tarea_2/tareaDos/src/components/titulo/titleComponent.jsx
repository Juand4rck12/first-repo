import React from 'react'

export const Title = (props) => {
    console.log(props, 'props title')
    return (
        <div>
            <h2>
                {props.title}
            </h2>
        </div>
    )
}
