import React, { useEffect } from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
  useLocation,
} from 'react-router-dom';
import {
  createMuiTheme,
  ThemeProvider,
} from '@material-ui/core/styles';
import { IntlProvider } from 'react-intl';
import '@formatjs/intl-numberformat/polyfill';
import enPolyfill from '@formatjs/intl-numberformat/dist/locale-data/en.json';
import esPolyfill from '@formatjs/intl-numberformat/dist/locale-data/es.json';
import AppHeader from './components/AppHeader';
import Footer from './components/Footer';
import FourOhFour from './pages/fourohfour/FourOhFour';
import Splash from './pages/splash/Splash';
import Press from './pages/press/Press';
import materialTheme from './styles/materialTheme';
import messagesEn from '../locale/en.json';
import messagesEs from '../locale/es.json';

// polyfill to enable formatting of a number using the unit prop
if (typeof Intl.NumberFormat.__addLocaleData === 'function') {
  Intl.NumberFormat.__addLocaleData(enPolyfill);
  Intl.NumberFormat.__addLocaleData(esPolyfill);
}

const messageMap = {
  en: messagesEn,
  es: messagesEs,
};

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(
    () => {
      window.scrollTo(0, 0);
    },
    [pathname],
  );

  return null;
}

export default function App() {
  const theme = createMuiTheme(materialTheme);
  const locale = 'en';

  const routerBasename = __DEV__ ? '/' : '/wildbook.org'; // for gh-pages prod

  return (
    <ThemeProvider theme={theme}>
      <IntlProvider
        locale={locale}
        defaultLocale="en"
        messages={messageMap[locale]}
      >
        <BrowserRouter basename={routerBasename}>
          <ScrollToTop />
          <main
            style={{
              height: '100%',
              width: '100%',
              justifyContent: 'center',
              alignItems: 'center',
              overflow: 'hidden',
              minHeight: '100vh',
            }}
          >
            <AppHeader />
            <Switch>
              <Route path="/press">
                <Press />
              </Route>
              <Route path="/" exact>
                <Splash />
              </Route>
              <Route>
                <FourOhFour />
              </Route>
            </Switch>
          </main>
          <Footer />
        </BrowserRouter>
      </IntlProvider>
    </ThemeProvider>
  );
}
