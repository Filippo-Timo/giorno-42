
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css'
import "./components/MyNav"
import MyNav from './components/MyNav'
import MyFooter from './components/MyFooter';
import Welcome from './components/Welcome';
import AllTheBooks from './components/AllTheBooks';

function App() {

  return (
    <>
      <div className="d-flex flex-column bg-secondary">
        <MyNav />
        <Welcome />
        <AllTheBooks />
        <MyFooter />
      </div>
    </>
  )
}

export default App
