import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter
} from "react-router-dom";
import Home from './screens/Home';
import Quiz from './components/Quiz';
import AboutUs from './components/AboutUs';
import NewsList from './components/NewsList';

function App() {
  return (
    <Router>
        <div>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/Quiz" element={<Quiz />} />
            <Route exact path="/AboutUs" element={<AboutUs />} />
            <Route exact path="/News" element={<NewsList />} />
          </Routes>
        </div>
      </Router>
      
  );
}

export default App;
