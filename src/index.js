import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Text from './Text'

ReactDOM.render(
  <React.StrictMode>
    <Text text="Regular text" textsize={15} textcolor="black"/>
    <Text text="Huge header" textsize={25} textcolor="black"/>
    <Text text="Danger notification" textsize={15} textcolor="red"/>
    <Text text="Underline text" textsize={20} textcolor="black" textunderline/>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
