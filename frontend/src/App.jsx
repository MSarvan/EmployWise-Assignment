import "./App.css";
import AllRoutes from "./AllRoutes";
import { BrowserRouter } from "react-router";

function App() {
  return (
    <BrowserRouter>
      <AllRoutes />
    </BrowserRouter>
  );
}

export default App;
