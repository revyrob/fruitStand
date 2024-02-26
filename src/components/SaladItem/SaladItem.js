import React from 'react';
import PropTypes from 'prop-types';
import './SaladItem.scss';

export default function SaladItem({ image, name }) {
  const favorite = true;
  return(
    <div className='saladItem__wrapper'>
        <h3>
          {name}
        </h3>
        <span className='saladItem__fav' aria-label={favorite ? 'Favorite' : 'Not Favorite'}>
          {favorite ? '😋' : ''}
        </span>
        <button className='saladItem__btn'>
          <span className='saladItem__img'role="img" aria-label={name}>{image}</span>
        </button>
    </div>
  )
}

SaladItem.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
}