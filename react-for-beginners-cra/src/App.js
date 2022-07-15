// react-router-dom v6 이상부터 Switch -> Routes로 변경
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";
function App() {
  return (
    <Router>
      {/** Switch: Route(URL)을 찾는다. Route를 찾으면 component를 rendering한다. */}
      <Routes>
        {/* 아래 코드로 변경
        <Route path="/">
          <Home />
        </Route> */}
        <Route path="/" element={<Home />} />
        <Route path="/movie" element={<Detail />} />
        <Route path="/hello" element={<h1>Hello</h1>} />
      </Routes>
    </Router>
  );
}

export default App;
