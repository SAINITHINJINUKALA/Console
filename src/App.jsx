import Months from "./Components/Months"
import Navbar from "./Components/Navbar"
import Summary from "./Components/Summary"
import Zero from "./Components/Zero"


function App() {
  
  return (
    <>
    <div
     className="font-HedvigLettersSans">
    <Navbar/>
    <Zero/>
    <Months/>
    <Summary/>

    </div>
    </>
  )
}

export default App