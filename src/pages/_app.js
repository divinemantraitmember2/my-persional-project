import '../styles/globals.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { store, persistor } from '../store/store';
import React, { lazy, Suspense } from 'react';
import { useRouter } from 'next/router';
import Footer from '../components/Footer';
 import Header  from "../components/Header";


export default function App({ Component, pageProps }) {

  const router = useRouter();
  const currentPath = router.pathname.split("/");
  

   return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {currentPath[1]=="admin"?"":<Header />}
        
        <Component {...pageProps} />
        {currentPath[1]=="admin"?"": <Footer/>}
       
      </PersistGate>
    </Provider>
  );
}
