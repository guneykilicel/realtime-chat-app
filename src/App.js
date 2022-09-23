import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home"
import Login from "./pages/Login";
import Register from "./pages/Register";
import "./style.scss"

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route>
        <Route index path="realtime-chat-app/" element={<Home />} />
        <Route path="realtime-chat-app/login" element={<Login />} />
        <Route path="realtime-chat-app/register" element={<Register />} />
      </Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
