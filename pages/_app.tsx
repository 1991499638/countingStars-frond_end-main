import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import rootStore from '../redux/store';
import { PersistGate } from 'redux-persist/integration/react';

const PGate = PersistGate as any;

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={rootStore.store}>
      <PGate persistor={rootStore.persistor}>
        <Component {...pageProps} />
      </PGate>
    </Provider>
  );
}

export default MyApp;
