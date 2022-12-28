import "./styles.css";
import { Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import Contato from "./routes/Contato";
import Serviços from "./routes/Serviços";
import Sobre from "./routes/Sobre";

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="/serviços" element={<Serviços />} />
        <Route path="/sobre" element={<Sobre />} />
      </Routes>
    </div>
  );
}
