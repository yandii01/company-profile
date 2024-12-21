import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/Homepage";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path="blogs" />
          <Route path="contact" />
          <Route path="*"  />
        </Routes>
      </BrowserRouter>
    </>
  )
}
