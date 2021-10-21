import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useMediaQuery } from 'react-responsive'
import Fade from 'react-reveal/Fade';
import './styles.css';

export default function Header() {

  const isMobile = useMediaQuery({
    query: '(max-width: 768px)'
  })

  const history = useHistory();
  function handleClick(tela) {
    history.push(tela);
  }

  const [header, setHeader] = useState("header");
  const [open, setOpen] = useState();

  const listenScrollEvent = event => {
    if (window.scrollY < 73) {
      return setHeader("header");
    } else if (window.scrollY > 70) {
      return setHeader("header2");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);

    return () => window.removeEventListener("scroll", listenScrollEvent);
  }, []);


  return (
    <header className={header} style={{ backgroundColor: history.location.pathname === "/register" ? "white" : ".header", boxShadow: history.location.pathname === "/register" ? "-1px -3px 20px 0px #000000" : ".header" }}>
        <div className="titulo-header">
          <h1>healthy food</h1>
        </div>
      <div className="flot-button" onClick={() => setOpen(!open)}>
        <div />
        <div />
        <div />
      </div>
      <Fade top when={open} duration={500}>
        <div className="conteudo-header" style={{ display: !isMobile ? "flex" : open ? "flex" : "none" }}>
          <h2 style={{ color: history.location.pathname === "/register" ? "#1d164d" : ".header" }}>healthy reciples</h2>
          <h2 style={{ color: history.location.pathname === "/register" ? "#1d164d" : ".header" }}>blog</h2>
          <h2 style={{ color: history.location.pathname === "/register" ? "#1d164d" : ".header" }}>join</h2>
          <button className="button-header" onClick={() => handleClick("/register")} style={{ background: history.location.pathname === "/register" ? "#BADC58" : ".header" }}>
            <p style={{ display: history.location.pathname === "/register" ? "none" : ".header" }}>register</p>
          </button>
          <button className="button-header" onClick={() => handleClick("/")} style={{ background: "#BADC58", display: history.location.pathname === "/register" ? ".header" : "none", }}>
            <p style={{ color: "#FFFFFF" }}>Home</p>
          </button>
        </div>
      </Fade>
    </header>
  );
}
