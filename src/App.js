import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Home from './component/home/Home';
import './App.scss'
import Header from './component/header/Header';
function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
