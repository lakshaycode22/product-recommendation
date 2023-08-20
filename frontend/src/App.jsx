import MultiStepForm from "./Components/MultiStepForm";
import ParticleBackground from "./Components/Particles";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <ParticleBackground />
      <Routes>
        <Route path="/" className=" h-screen" element={<MultiStepForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
