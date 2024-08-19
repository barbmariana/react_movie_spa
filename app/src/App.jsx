import Header from './components/Header.jsx'
import Home from './views/Home.jsx'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import MovieDetail from './views/MovieDetail.jsx'
import NextRelease from './views/NextRelease.jsx'
function App() {


  return(
    <div className='App'>
      <Router>
        <Header></Header>
        <Routes>
          <Route path='/nextrelease' element={<NextRelease/>}></Route>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/movie/:id' element={<MovieDetail/>}></Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App
