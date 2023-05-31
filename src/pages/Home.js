import React from 'react';
import { home } from '../utils/content';
import LocaleContext from '../contexts/LocaleContext';

function Home() {
  const { locale } = React.useContext(LocaleContext);

  return (
    <>
      <h1>{home[locale].header}</h1>
      <span className='subheader'>{home[locale].subheader}</span>
      <p>{home[locale].paragraph}</p>
    </>
  );
}

export default Home;
