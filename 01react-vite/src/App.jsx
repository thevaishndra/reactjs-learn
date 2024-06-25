

import June from "./june"

function App() {
 const username = "hey ya hey ya"

  return (
    <>
    <June/>
    {<h1>heat waves {username}</h1>/* inside curly braces it's treated as variable */}
    <p>test para</p>
    </>
    
  )
}

export default App
