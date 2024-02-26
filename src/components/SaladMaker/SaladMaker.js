import React from 'react';
import './SaladMaker.scss';
import SaladBuilder from '../SaladBuilder/SaladBuilder';


export default function SaladMaker() {
  return(
    <>
      <h1 className='saladMaker'>
        <span role="img" aria-label="salad">🥗 </span>
          Build Your Custom Salad!
          <span role="img" aria-label="salad"> 🥗</span>
      </h1>
      <SaladBuilder/>
    </>
  )
}