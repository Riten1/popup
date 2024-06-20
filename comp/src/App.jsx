import { useState } from "react"
import Model from "./model/Model"


function App() {

  const [popModel, setPopModel] = useState(false)

  function handleToggle () {
    setPopModel(!popModel)
  }

  function closeFun() {
    setPopModel(false)
  }

  return (
    <div>
      <button onClick={handleToggle}>Login</button>
      {
        popModel && <Model closeFun={closeFun}/>
      }
    </div>
  )
}

export default App
