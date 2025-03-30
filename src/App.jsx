import "./App.scss";
import AllRoutes from "./AllRoutes";
import { BrowserRouter } from "react-router";
import { GlobalContextProvider } from "./context/GlobalContext";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <ToastContainer position="top-right" autoClose={3000} />
        <GlobalContextProvider>
          <AllRoutes />
        </GlobalContextProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
