import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import DetailsPage from "./pages/details/DetailsPage";
import MainHeader from "./components/main-header/MainHeader";

function App() {
  return (
    <div className="">
      <MainHeader />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/details/:id" element={<DetailsPage />} />
      </Routes>
    </div>
  );
}

export default App;
