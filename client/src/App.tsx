import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Layout from "./components/layout";
import Inventory from "./pages/inventory";
import { Toaster } from "sonner";

function App() {
  return (
    <>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Inventory />} />
          </Routes>
          <Toaster />
        </Layout>
      </BrowserRouter>
    </>
  );
}

export default App;
