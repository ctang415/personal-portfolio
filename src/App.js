import React, { createContext, useEffect, useMemo, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Contact from "./Components/Contact";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Information from "./Components/Information";
import Projects from "./Components/Projects";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { CssBaseline } from "@mui/material";
import {
  TransitionGroup,
  CSSTransition
} from "react-transition-group";
import Loading from "./Components/Loading";

function App() {
  const [loading, setLoading] = useState(true)
  const [mode, setMode] = useState("light");
  let location = useLocation();

  /*
  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 3000)
  }, [])
  */

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: mode,
        }
      }),
    [mode] 
  );
  if (loading) {
    return (
      <Loading loading={loading}/>
    )
  } else {
  return (
    <ThemeProvider theme={theme}>
    <CssBaseline />
    <div className="app">
      <Header setMode={setMode} mode={mode}
      />
        <TransitionGroup>
          <CSSTransition
          key={location.pathname}
          timeout={300}
          classNames="fade">
      <Routes location={location}>
        <Route path="/" exact element={<Home/>}/>
        <Route path="/info" element={<Information/>}/>
        <Route path="/projects" element={<Projects/>}/>
      </Routes>
      </CSSTransition>
      </TransitionGroup>
      <div className="home-contact">
        <Contact mode={mode} />
      </div>
    </div>
    </ThemeProvider>
  );
  }
}

export default App;


