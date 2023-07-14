import React, { useEffect, useMemo, useState } from "react";
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
  const [ mobile, setMobile ] = useState(false)
  let location = useLocation();

  useEffect(() => {
    function detectMob() {
      const toMatch = [
        /Android/i,
        /webOS/i,
        /iPhone/i,
        /iPad/i,
        /iPod/i,
        /BlackBerry/i,
        /Windows Phone/i
      ];
    return toMatch.some((toMatchItem) => {
        return navigator.userAgent.match(toMatchItem);
    });
  }
  detectMob()
  if (detectMob() === true) {
    setMobile(true)
  }
  }, [location.pathname])

  useEffect(() => {
    setTimeout( () => {
      setLoading(false)
    }, 5000)
  }, [])


  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: mode,
        }
      }),
    [mode] 
  );
{
    return (
      
    <ThemeProvider theme={theme}>
    <CssBaseline />
    <Loading loading={loading}/>
      <div className={ !loading && mode === "light" ? "app" : "app-dark"}>
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
        <Route path="/projects" element={<Projects mode={mode} mobile={mobile} />}/>
      </Routes>
      </CSSTransition>
      </TransitionGroup>
      <div className="home-contact" style={ location.pathname === "/projects" && mobile ? {position: "static"} : {} }>
        <Contact mode={mode} />
      </div>
    </div>
    </ThemeProvider>
  );
  }
}

export default App;


