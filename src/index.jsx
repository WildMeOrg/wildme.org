import React from 'react';
import { render } from 'react-dom';
import { hot } from 'react-hot-loader/root';

import 'normalize.css';
import '../fonts/fonts.css';
import './styles/globalStyles.css';

import App from './App';

const root = document.getElementById('root');

const Main = hot(() => (
  <App />
));

const load = () => render(<Main />, root);

load();
