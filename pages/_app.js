import { Provider } from 'react-redux';
import { appWithTranslation } from 'next-i18next';
import Header from '../src/components/header';
import Footer from '../src/components/footer';
import '../styles/globals.css'
import store from '../src/redux/store';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Provider store={store}>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </Provider>
    </>
  );
}

export default appWithTranslation(MyApp);
