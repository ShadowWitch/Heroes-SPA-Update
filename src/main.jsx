
import React from 'react'
import ReactDOM from 'react-dom/client';
import './styles.css'

import { BrowserRouter } from 'react-router-dom';

// Components
import { HeroesApp } from './HeroesApp';

ReactDOM.createRoot(document.getElementById('root')).render(

    <BrowserRouter>
        {/* <React.StrictMode> */}
            <HeroesApp />
        {/* </React.StrictMode> */}
    </BrowserRouter>
)