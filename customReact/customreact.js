function customRender(reactElement, container){//to render
    // const domElement = document.createElement
    // (reactElement.type)
    // domElement.innerHTML = reactElement.children
    // domElement.setAttribute('href', reactElement.props.href)
    // domElement.setAttribute('target', reactElement.props.target)
    // container.appendChild(domElement)

    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children
    for(const prop in reactElement.props){
        if(prop === 'children') continue;
        domElement.setAttribute(prop, reactElement.props[prop])//in the previous code we were repeating attribute property
    }//here with the help of loops we wrote clean code
    container.appendChild(domElement)
}
const reactElement = {
    type: 'a',//type of element, a is anchor tag
    props: {//it is an object in which we can add as much as properties
        href: 'https://google.com',//properties of anchor tag
        target: '_blank'
    },
    children: 'Click me to visit google'
}//all of these are terminologies

const mainContainer = document.querySelector('#root')

customRender(reactElement, mainContainer)