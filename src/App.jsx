import { Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/Header/Header";
import { GlobalStyle } from "./globalStyles";
import HomePage from "./pages/HomePage/HomePage";
import BeersPage from "./pages/BeersPage/BeersPage";

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/beers" element={<BeersPage />} />
        <Route path="/*" element={<Navigate to={"/"} />} />
      </Routes>
    </>
  );
}

export default App;
