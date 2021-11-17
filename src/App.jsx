import React, { useEffect } from 'react';
import {
  BrowserRouter,
  HashRouter,
  Switch,
  Route,
  useLocation,
} from 'react-router-dom';
import {
  createMuiTheme,
  ThemeProvider,
} from '@material-ui/core/styles';
import { Helmet } from 'react-helmet';
import { IntlProvider } from 'react-intl';
import '@formatjs/intl-numberformat/polyfill';
import enPolyfill from '@formatjs/intl-numberformat/dist/locale-data/en.json';
import esPolyfill from '@formatjs/intl-numberformat/dist/locale-data/es.json';
import AppHeader from './components/AppHeader';
import Footer from './components/Footer';
import FourOhFour from './pages/fourohfour/FourOhFour';
import Splash from './pages/splash/Splash';
import Press from './pages/press/Press';
import MediaResources from './pages/press/MediaResources';
import Legal from './pages/legal/Legal';
import Services from './pages/services/Services';
import Donate from './pages/donate/Donate';
import Publications from './pages/publications/Publications';
import Platforms from './pages/platforms/Platforms';
import Team from './pages/team/Team';
import Supporters from './pages/supporters/Supporters';
import Volunteer from './pages/volunteer/Volunteer';
import Careers from './pages/careers/Careers';
import Contact from './pages/contact/Contact';
import WhatWeDo from './pages/about/WhatWeDo';
import Code from './pages/code/Code';
import Wildbook from './pages/wildbook/Wildbook';
import PlatformPage from './pages/platforms/PlatformPage';
import platformData from './pages/platforms/platformData';
import NewsArticle from './pages/news/NewsArticle';
import newsData from './pages/news/newsData';
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

  const routerBasename = __GH_PAGES__ ? '/wildbook.org' : '/';
  const RouterComponent = __DEV__ ? BrowserRouter : HashRouter;
  // const RouterComponent = __GH_PAGES__ ? HashRouter : BrowserRouter;

  return (
    <ThemeProvider theme={theme}>
      <Helmet>
        <script
          type="text/javascript"
          src="https://app.mailjet.com/statics/js/widget.modal.js"
        />
      </Helmet>
      <IntlProvider
        locale={locale}
        defaultLocale="en"
        messages={messageMap[locale]}
      >
        <div>
          <RouterComponent basename={routerBasename}>
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
                {platformData.map(project => (
                  <Route
                    key={project.path}
                    path={`/platforms${project.path}`}
                  >
                    <PlatformPage data={project} />
                  </Route>
                ))}
                {newsData.map(articleData => (
                  <Route
                    key={articleData.path}
                    path={`/news${articleData.path}`}
                  >
                    <NewsArticle articleData={articleData} />
                  </Route>
                ))}
                <Route path="/platforms">
                  <Platforms />
                </Route>
                <Route path="/press">
                  <Press />
                </Route>
                <Route path="/media-resources">
                  <MediaResources />
                </Route>
                <Route path="/publications">
                  <Publications />
                </Route>
                <Route path="/legal">
                  <Legal />
                </Route>
                <Route path="/team">
                  <Team />
                </Route>
                <Route path="/wildbook">
                  <Wildbook />
                </Route>
                <Route path="/supporters">
                  <Supporters />
                </Route>
                <Route path="/donate">
                  <Donate />
                </Route>
                <Route path="/services">
                  <Services />
                </Route>
                <Route path="/volunteer">
                  <Volunteer />
                </Route>
                <Route path="/careers">
                  <Careers />
                </Route>
                <Route path="/contact">
                  <Contact />
                </Route>
                <Route path="/code">
                  <Code />
                </Route>
                <Route path="/what-we-do">
                  <WhatWeDo />
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
          </RouterComponent>
        </div>
      </IntlProvider>
    </ThemeProvider>
  );
}
