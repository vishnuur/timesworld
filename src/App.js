import "./App.css";
import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
const Login = lazy(() => import("./Pages/Login/index"));
const Home = lazy(() => import("./Pages/Home"));
const Loader = lazy(() => import("./Components/Loader"));

function App() {
  return (
    <div className="App">
      <Suspense fallback={<Loader isLoading={true} />}>
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/home" element={<Home />}></Route>
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
