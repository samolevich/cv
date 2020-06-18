import React, { useState, useEffect } from 'react';

export default () => {
  const [ photo, setPhoto ] = useState('img/wink.svg');

  useEffect(() => {
    setTimeout(() => {
      const url = 'https://api.github.com/users/samolevich';
      fetch(url)
        .then(res => res.json())
        .then(data => setPhoto(data.avatar_url));
    }, 2048)
  }, []);

  return <img className='photo' src={ photo } alt='my face' />
}
