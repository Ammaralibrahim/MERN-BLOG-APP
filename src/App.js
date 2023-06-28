import "./App.css";
import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import İndexPage from "./pages/İndexPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import { UserContextProvider } from "./UserContext";
import CreatePost from "./pages/CreatePost";
import PostDetail from "./pages/PostDetail";

function App() {
  return (
    <UserContextProvider>
     <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<İndexPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/create" element={<CreatePost />} />
        <Route path="/post/:id" element={<PostDetail />} />
      </Route>
     </Routes>
    </UserContextProvider>
    
  );
}

export default App;
