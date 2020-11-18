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
import Legal from './pages/legal/Legal';
import Sponsors from './pages/sponsors/Sponsors';
import Contribute from './pages/contribute/Contribute';
import Publications from './pages/publications/Publications';
import Projects from './pages/projects/Projects';
import Staff from './pages/staff/Staff';
import ProjectPage from './pages/projects/ProjectPage';
import projectData from './pages/projects/projectData';
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
        <HashRouter basename={routerBasename}>
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
              {projectData.map(project => (
                <Route
                  key={project.path}
                  path={`/projects${project.path}`}
                >
                  <ProjectPage data={project} />
                </Route>
              ))}
              <Route path="/projects">
                <Projects />
              </Route>
              <Route path="/press">
                <Press />
              </Route>
              <Route path="/publications">
                <Publications />
              </Route>
              <Route path="/legal">
                <Legal />
              </Route>
              <Route path="/staff">
                <Staff />
              </Route>
              <Route path="/sponsors">
                <Sponsors />
              </Route>
              <Route path="/contribute">
                <Contribute />
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
        </HashRouter>
      </IntlProvider>
    </ThemeProvider>
  );
}
