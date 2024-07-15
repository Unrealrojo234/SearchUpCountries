import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

$('#root').css('display','none')
$('#loader').css('display','block')
document.addEventListener("DOMContentLoaded",(e)=>{
  $('#loader').css('display','none')
  $('#root').css('display','block')
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
