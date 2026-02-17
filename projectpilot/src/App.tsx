
import './App.css'
import Projectpage  from './Projects/Projectpage';
import { BrowserRouter,Routes,Route,NavLink } from 'react-router';
import Home from './Home';
import NotFound from './NotFound';
import ProjectOnePage from './Projects/ProjectOnePage';
function App() {
 

  return (
    <>
      {/* <h1>Ready to build projects with React</h1> */}
      {/* <blockquote cite='Benjamin Franklin'>
       
          An investment in knowledge pays the best interest.
       
      </blockquote> */}
{/* <div className='container'>
<Projectpage></Projectpage>
</div> */}

  <BrowserRouter>
<header className='sticky'>
<span className='logo'>
  <img src='assets/logo-3.svg' alt='logo' width='49' height='99'/>
</span>
<NavLink to='/' className='button rounded'>
<span className='icon-home'></span>
Home
</NavLink>
<NavLink to='/projects' className='button rounded'>
<span className='icon-home'></span>
Projects
</NavLink>
</header>

  <div className='container'>
<Routes>
  <Route path='/' element={<Home/>}></Route>
  <Route path='/projects' element={<Projectpage/>}></Route>
  <Route path='/projects/:id' element={<ProjectOnePage/>}></Route>
   <Route path='*' element={<NotFound/>}></Route>
</Routes>
  </div>
  </BrowserRouter>

    </>
  )
}

export default App
