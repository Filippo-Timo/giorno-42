
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css'
import "./components/MyNav"
import MyNav from './components/MyNav'
import MyFooter from './components/MyFooter';
import Welcome from './components/Welcome';
import AllTheBooks from './components/AllTheBooks';
import SingleBook from './components/SingleBook';
import BookList from './components/BookList';
import HorroBooks from "./assets/horror.json"

function App() {

  return (
    <>
      <div className="d-flex flex-column bg-secondary">
        <MyNav />
        <Welcome />
        {/* <AllTheBooks /> */}
        {/* <SingleBook n={3} /> */}
        <BookList AllBooks={HorroBooks} />
        <MyFooter />
      </div>
    </>
  )
}

export default App
