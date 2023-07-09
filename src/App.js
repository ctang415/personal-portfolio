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
  const [mode, setMode] = useState("dark");
  let location = useLocation();

  
  useEffect(() => {
    setTimeout(() => {
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
      <div className={ !loading ? "app" : ""}>
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
        <Route path="/projects" element={<Projects mode={mode} />}/>
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


