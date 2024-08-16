import React from 'react';
import { useSearchParams } from 'react-router-dom';
import Aside from '../components/aside';

const Home = () => {
  const [searchParams, setSearchParams] = useSearchParams('');

  function addParams() {
    setSearchParams({
      term: 'prueba',
      name: 'juan'
    });
  }

  function addParams2() {
    searchParams.set('link', '1234');
    setSearchParams(searchParams);
  }

  function deleteParam() {
    searchParams.delete('name');
    setSearchParams(searchParams);
  }

  return (
    <>
      <div>
        <h1>Home</h1>
        <button type='button' onClick={addParams}>
          Boton 1
        </button>
        <button type='button' onClick={addParams2}>
          Boton 2
        </button>
        <button type='button' onClick={deleteParam}>
          Boton 3
        </button>
      </div>
      <div>
        <Aside />
      </div>
    </>
  );
};

export default Home;