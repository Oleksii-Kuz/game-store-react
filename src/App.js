import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux";
import { Header } from "./components/header";
import { GamePage } from "./pages/game-page";
import { HomePage } from "./pages/home-page";
import { OrderPage }  from "./pages/order-page";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
          </Routes>
          <Routes>
            <Route path="/app/:title" element={<GamePage />} />
          </Routes>
          <Routes>
            <Route path="/order" element={<OrderPage />} />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
