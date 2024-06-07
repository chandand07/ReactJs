import Chai from "./chai"

function App() {
  const username = "chandan"
  return (
    <>
    <Chai/>
    {/* // here we can return only one element in jsx */}
    <h2>hi {username}</h2>
    {/* this is final evaluated expression means final outcome */}
    </>
  )
}

export default App
