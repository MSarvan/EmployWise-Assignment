import "./App.scss";
import AllRoutes from "./AllRoutes";
import { BrowserRouter } from "react-router";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <AllRoutes />
      </BrowserRouter>
    </div>
  );
}

export default App;
