import UserParent from "./Components/Task1/UserParent"
import About from "./Components/Task1/About"
import Contact from "./Components/Task1/Contact"

function App() {
  return (
    <div style={{padding: '20px', fontFamily: 'sans-serif'}}>
      <h1 style={{textAlign: 'center'}}>Task 1 - React</h1>
      
      <UserParent />


      <div style={{display: 'flex', gap: '20px', marginTop: '30px'}}>
        <div style={{flex: 1, border: '1px solid #ccc', padding: '15px', borderRadius: '10px', background: '#fff'}}>
          <About />
        </div>
        <div style={{flex: 1, border: '1px solid #ccc', padding: '15px', borderRadius: '10px', background: '#fff'}}>
          <Contact />
        </div>
      </div>
    </div>
  )
}

export default App