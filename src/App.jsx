import './App.css'
import Navbar from './components/navbar'
import AboutMe from './pages/aboutme'
import Blogs from './pages/blogs'
import HomePage from './pages/homepage'
import Portofolio from './pages/portofolio'

function App() {
  return (
    <div className='font-(family-name:--font-nunito)'>
      <Navbar />
      <HomePage />
      <AboutMe />
      <Portofolio />
      <Blogs />
    </div>
  )
}

export default App
