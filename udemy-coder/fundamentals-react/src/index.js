import './index.css'
import React from 'react'
import ReactDom from 'react-dom'

import First from './components/basics/First'
import WithParam from './components/basics/WithParam'

ReactDom.render(
    <div id ="app">
        <First></First>
        <WithParam 
            titulo="Segundo Component"
            aluno="Pedro"
            nota = {9.3}
         />
    </div>,
    document.getElementById('root')
)