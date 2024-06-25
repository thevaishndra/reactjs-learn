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

const anotherUser = "The Beetles"

const reactElement = React.createElement(
    'a',//we can add any attributes
    {href: 'https://google.com', target: '_blank'}, 'click me to visit google',
    anotherUser//we can't write if else here as it is evaluated expression
)
ReactDOM.createRoot(document.getElementById('root')).render(
  
    // anotherElement //reactElement is not working because the way we created the syntax isn't right
    reactElement
//<App/>
)
