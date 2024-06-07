import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function Myapp(){
  return(
    <div>
      <h1>chai in my app</h1>
    </div>
  )
}

const anotherelement = (
  <a href="https://google.com" target = '_blank'>visit google</a>
)

const reactelement = React.createElement(
  'a',
  {href: 'https://google.com' , target : '_blank'},
  'click me to visit'
)
// ReactDOM.createRoot(document.getElementById('root')).render(
//   reactelement
// )

// ReactDOM.createRoot(document.getElementById('root')).render(
//   anotherelement
// )

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
