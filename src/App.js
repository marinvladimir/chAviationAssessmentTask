import { BrowserRouter } from "react-router-dom";
import Router from "./Router";
import "./App.css";
import { GlobalContextProvider } from "./Context";

function App() {
  return (
    <GlobalContextProvider>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </GlobalContextProvider>
  );
}

export default App;
