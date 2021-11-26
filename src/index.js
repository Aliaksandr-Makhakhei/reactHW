import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Square from './Square';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
   <Square label='BIG square' cssClass='square__big'/>
   <Square label='A less square' cssClass='square__medium'/>
   <Square label='The smallest one' cssClass='square__small'/>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();