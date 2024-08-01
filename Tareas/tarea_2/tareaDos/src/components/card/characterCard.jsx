import React from 'react';
import { Title } from '../titulo/titleComponent';
import { Image } from '../imagen/imageComponent';
import { Details } from '../details/detailsComponent';

function CharacterCard(props) {
    console.log(props, 'props result')

  return (
    <div>
      <Title title={props.name}/>
      <Image image={props.image} />
      <Details 
        gender={props.gender} 
        status={props.status} 
      />
    </div>
  );
}

export default CharacterCard;