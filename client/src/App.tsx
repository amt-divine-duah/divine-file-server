import { Container } from "react-bootstrap";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import BusFilesPage from "./pages/BusFilesPage";
import LoginPage from "./pages/LoginPage";
import FilePage from "./pages/FilePage";

export default function App() {
  
  return (
    <Container fluid className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<BusFilesPage />}/>
        <Route path="/files" element={<BusFilesPage />}/>
        <Route path="/files/:id" element={<FilePage />}/>
        <Route path="/login" element={<LoginPage />}/>
        <Route path="*" element={<Navigate to="/" />}/>
      </Routes>
      </BrowserRouter>
    </Container>
  );
}