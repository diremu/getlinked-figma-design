import './App.css'
import Router from './router';
import { BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Router/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;