import { Route, Routes } from "react-router-dom";
import "./App.css";
import CardDetail from "./components/CardDetail";
import Cards from "./components/Cards";
import Tabs from "./components/Tabs";

function App() {
  return (
    <>
      <Tabs />
      <Routes>
        <Route path="/" element={<Cards />} />
        <Route path="/data/:slug" element={<CardDetail />} />
      </Routes>
    </>
  );
}

export default App;
