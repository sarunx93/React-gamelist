import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import MyGamesButton from "./MyGamesButton";
import { useGlobalContext } from "../Context/context";

const Navbar = () => {
  const { sidebarOpenHandler, openModalMe, openModalProj } = useGlobalContext();
  return (
    <NavContainer>
      <div className="nav-center">
        <div className="nav-header">
          <Link to="/">
            <h3 className="home">Game List Project</h3>
          </Link>

          <button
            type="button"
            className="nav-toggle"
            onClick={sidebarOpenHandler}
          >
            <FaBars />
          </button>
        </div>
        <ul className="nav-links">
          <button className="butn" onClick={openModalProj}>
            About the project
          </button>
          <button className="butn" onClick={openModalMe}>
            About Me
          </button>
        </ul>
        <Link to="/MyGames">
          <MyGamesButton />
        </Link>
      </div>
    </NavContainer>
  );
};

const NavContainer = styled.nav`
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;

  .nav-center {
    width: 90vw;
    margin: 0 auto;
    max-width: var(--max-width);
  }
  .nav-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.25rem;
  }

  .nav-links {
    display: none;
  }

  .nav-toggle {
    background: transparent;
    border: transparent;
    color: var(--clr-primary-5);
    cursor: pointer;
    font-size: 2rem;
  }
  .my-games-btn {
    font-size: 1.9rem;
  }
  .butn {
    margin: 0 0.75rem;
    background: transparent;
    border: transparent;
    font-size: 1.25rem;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    cursor: pointer;
    &:hover {
      color: blue;
    }
  }
  .home {
    cursor: pointer;
  }
  @media (min-width: 992px) {
    .nav-toggle {
      display: none;
    }
    .nav-center {
      display: grid;
      grid-template-columns: auto 1fr auto;
      align-items: center;
    }
    .nav-links {
      display: flex;
      justify-content: center;
    }
  }
`;

export default Navbar;
