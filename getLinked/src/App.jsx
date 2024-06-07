import './App.css'
import Router from './router';
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import ErrorPage from './pages/ErrorPage';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Router/>} errorElement={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;