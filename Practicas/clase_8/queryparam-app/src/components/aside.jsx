import React from 'react'
import { useSearchParams } from 'react-router-dom'

const Aside = () => {

    const [param] = useSearchParams('')
    const name = param.get('name') ?? '';
    const link = param.get('link') ?? '';


    console.log(name, '<== name');
    console.log(param, '<== Param')

    return (
        <div>
            <h1>Componente Aside</h1>
            <h2>Nombre Param: {name}</h2>
            <h3>Valor de link: {link}</h3>
        </div>
    )
}

export default Aside