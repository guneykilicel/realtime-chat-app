import { useContext } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { AuthContext } from "./context/AuthContext";
import Home from "./pages/Home"
import Login from "./pages/Login";
import Register from "./pages/Register";
import "./style.scss"

function App() {

  const {currentUser} = useContext(AuthContext)
  const ProtectedRoute = ({children}) => {
    if(!currentUser){
      return <Navigate to="realtime-chat-app/login" />
    }
    return children
  }
  return (
    <BrowserRouter>
    <Routes>
      <Route>
        <Route index path="realtime-chat-app/" element={
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        } />
        <Route path="realtime-chat-app/login" element={<Login />} />
        <Route path="realtime-chat-app/register" element={<Register />} />
      </Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
