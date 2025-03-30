import "./App.scss";
import AllRoutes from "./AllRoutes";
import { BrowserRouter } from "react-router";
import { GlobalContextProvider } from "./context/GlobalContext";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <GlobalContextProvider>
          <AllRoutes />
        </GlobalContextProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
