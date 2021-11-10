import './index.css'
import React from 'react'
import ReactDom from 'react-dom'

import First from './components/basics/First'
import WithParam from './components/basics/WithParam'
import Fragment from './components/basics/Fragment'


ReactDom.render(
    <div id ="app">
        <First></First>
        <WithParam 
            titulo="Segundo Component"
            aluno="Pedro"
            nota = {9.3}
         />
         <Fragment />
    </div>,
    document.getElementById('root')
)