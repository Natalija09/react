import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './components/App';
import {BrowserRouter, Route} from 'react-router-dom'
import '../src/styles/style.css'


ReactDOM.render(

<BrowserRouter>
<Route path="/" component={App}/>
</BrowserRouter>

, document.getElementById('root'))

