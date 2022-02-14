import React from "react";
import { useGlobalContext } from "../Context/context";
import { FaTimes } from "react-icons/fa";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const { sidebarCloseHandler, sidebarOpen, openModalMe, openModalProj } =
    useGlobalContext();

  return (
    <SidebarContainer>
      <aside className={`${sidebarOpen ? "sidebar show-sidebar" : "sidebar"}`}>
        <div className="sidebar-header">
          <h3>Game List Project</h3>
          <button className="close-btn" onClick={sidebarCloseHandler}>
            <FaTimes />
          </button>
        </div>
        <ul className="links">
          <li onClick={openModalProj}>About the project</li>

          <li onClick={openModalMe}>About Me</li>
        </ul>
      </aside>
    </SidebarContainer>
  );
};

const SidebarContainer = styled.div`
  text-align: center;
  .sidebar-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 1.5rem;
  }
  .close-btn {
    font-size: 2rem;
    background: transparent;
    border: transparent;
    color: red;
    cursor: pointer;
  }
  .close-btn:hover {
    color: #ff5577;
  }
  .links {
    margin-bottom: 2rem;
  }
  .links li {
    display: block;
    text-align: left;
    font-size: 1rem;
    text-transform: capitalize;
    padding: 1rem 1.5rem;
    transition: var(--transition);
    cursor: pointer;
  }
  .links li:hover {
    padding: 1rem 1.5rem;
    padding-left: 2rem;
    background: var(--clr-grey-10);
    color: var(--clr-grey-2);
  }
  .game-btn-container {
    text-align: left;
    padding: 0.75rem 0.75rem;
  }
  .sidebar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: var(--clr-white);
    transition: var(--transition);
    transform: translate(-100%);
    z-index: -1;
  }
  .show-sidebar {
    transform: translate(0);
    z-index: 999;
  }
  @media screen and (min-width: 992px) {
    .sidebar {
      display: none;
    }
  }
`;

export default Sidebar;
