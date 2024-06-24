import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
    return (//whatever written here, end of the day it is parsed as in file react element
        <div>
            <h1>Custom App !</h1>
        </div>
    )
}

const ReactElement = {
    type: 'a',//type of element, a is anchor tag
    props: {//it is an object in which we can add as much as properties
        href: 'https://google.com',//properties of anchor tag
        target: '_blank'
    },
    children: 'Click me to visit google'
}

const anotherElement = (
    <a href="https:://google.com"></a>
)
ReactDOM.createRoot(document.getElementById('root')).render(
  
    ReactElement
  
)
