import Header from "./partials/Header";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <main className="main-app">
        <Header></Header>
        <Routes>
          <Route path="/" Component={Home} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
