import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import  Home from './components/Home'
import Checkout from './components/Checkout'
function App() {

  return (
    <Router>
      <div className='app'>
        <Routes>
        <Route path='/' element={ <>
          <Header/>
          <Home/>
          </>}
          >
        </Route>
        <Route path='/login'
        element={
          <>
          <h1>Login page</h1>
          </>
        }
        >
        </Route>
        <Route path='/checkout'
        element ={
          <>
          <Header/>
          <Checkout/>
          </>
        }
        >
          
        </Route>
        <Route path='/about' element ={
          <>
          <h1>About page</h1>
          </>
        }>
        </Route>
        </Routes>
      </div>
    </Router>
  )
}

export default App