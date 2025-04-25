import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import MovieDetailPage from './pages/MovieDetailPage'
import { ToastContainer } from 'react-toastify'
//import {ProtectedRoute}  from './routes/ProtetedRoute'
import ProfilePage from './pages/ProfilePage'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/profile' element={<ProfilePage/>}/>
        <Route  path='/movie/:movieId' element={<MovieDetailPage /> }/>
      </Routes>

      <ToastContainer position="top-right" autoClose={3000} />
    </>
  )
}

export default App
