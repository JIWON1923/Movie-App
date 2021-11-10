import Home from "./routes/Home"
import Detail from "./routes/Detail"
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() { // router를 render하도록
  return (
    <Router>
      <Routes>
        <Route path="/movie" element={<Detail />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
