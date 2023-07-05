import React, { createContext, useEffect, useMemo, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Contact from "./Components/Contact";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Information from "./Components/Information";
import Projects from "./Components/Projects";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { CssBaseline, Switch } from "@mui/material";

function App() {
  const [ home, setHome ] = useState(true)
  const [mode, setMode] = useState("light");

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: mode,
        }
      }),
    [mode] 
  );

  return (
    <ThemeProvider theme={theme}>
    <CssBaseline />
    <div className="app">
      <Header setMode={setMode} mode={mode}
      />
      <Routes>
        <Route path="/" exact element={<Home/>}/>
        <Route path="/info" element={<Information/>}/>
        <Route path="/projects" element={<Projects/>}/>
      </Routes>
      <div className="home-contact">
        <Contact mode={mode} />
      </div>
    </div>
    </ThemeProvider>
  );
}

export default App;


