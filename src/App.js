import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { Header } from "./components/header";
import { HomePage } from "./pages/home-page";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
