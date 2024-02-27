import "./App.css";
import { ThemeProvider } from '@mui/material/styles';
import theme from "./theme";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Detail from "./pages/Detail";
import Home from "./pages/Home";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/Detail" element={<Detail/>} />
      </Routes>
      </BrowserRouter>

    </ThemeProvider>
  );
}

export default App;
