import React, { useState } from 'react'
import '../form/formComponent.css'

export const FormComponent = (props) => {

  console.log(props, '=> form')

  const [name, setName] = useState('')
  const [password, setPaswordd] = useState('')
  const [error, setError] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault();

    if(name === '' && password === ''){
      setError(true);
    } else {
      setError(false);
      props.setUser(name)
    }
  }

  return (
    <div>
      <h1>FORMULARIO</h1>
      <form onSubmit={handleSubmit} className='form' action="">
      <input onChange={e => setName(e.target.value)} value={name} type='text' />
      {error && <p className='textError'>El campo nombre es requerido.</p>}
      <input onChange={e => setPaswordd(e.target.value)} value={password} type='password' />
      {error && <p className='textError'>El campo password es requerido.</p>}
      <button type='submit'>Login</button>
      </form>
    </div>
  )
}

export default FormComponent