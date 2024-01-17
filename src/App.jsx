import Navbar from "./Components/Navbar/Navbar"
import { DocumentProvider } from "./Context/DocumentProvider"

function App() {
  return(
    <DocumentProvider>
      <div className="App">
        <Navbar />
      </div>
    </DocumentProvider>
  )
}

export default App
