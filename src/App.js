// In this project i am using the movie db api and it is not working without vpn or without dns setting go to the chorome setting > search
// dns > select security > go on select dns provider > choose cloudflare(1.1.1.1)
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
