import React from 'react'

export const Image = (props) => {
    console.log(props, 'props image')
    return (
        <div>
            <a href="https://es.wikipedia.org/wiki/Spider-Man:_Miles_Morales" target='blank'>
                <img id='img' src="./miles_morales.jpg" alt="image" />
            </a>
        </div>
    )
}
