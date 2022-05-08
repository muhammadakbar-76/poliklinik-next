import './globals.css'
import type { AppProps } from 'next/app'
import { SessionProvider } from 'next-auth/react'
import Appcontext from '../utils/appcontext';
import { useState } from 'react';
import Loading from './components/Loading';

function MyApp({ Component, pageProps:{ session, ...pageProps} }: AppProps) {

  const [states, setStates] = useState({
    loading: false
  });

  return (
  <Appcontext.Provider value={{ 
    states,
    setStatus: (status,name) => {
      setStates({
        ...states,
        [name]: status
      });
    }
   }}>
  <SessionProvider session={session}>
    <Loading state={states.loading}/>
    <Component {...pageProps} />
  </SessionProvider>
  </Appcontext.Provider>
  )
}

export default MyApp
