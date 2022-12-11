import React from 'react';
import  ReactDOM  from 'react-dom/client';
import { HelloWorldApp } from './HelloWorldApp';

import './Styles.css'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <HelloWorldApp title='Hola perros'/>
    </React.StrictMode>
);

