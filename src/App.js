import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Transport from "./pages/Transport";
import Train from "./pages/Train";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/transport" element={<Transport />} />
        <Route path="/train" element={<Train />} />
        {/* other routes */}
      </Routes>
    </Router>
  );
}

export default App;
