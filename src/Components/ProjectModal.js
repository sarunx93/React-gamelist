import React from "react";
import styled from "styled-components";
import { FaTimes } from "react-icons/fa";
import { useGlobalContext } from "../Context/context";

const MeModal = () => {
  const { modalProjectOpen, closeModalProj } = useGlobalContext();
  return (
    <ModalContainer>
      <div
        className={`${
          modalProjectOpen ? "modal-overlay show-modal" : "modal-overlay"
        }`}
      >
        <div className="modal-container">
          <h3 className="title">About the Project</h3>
          <button className="close-modal-btn" onClick={closeModalProj}>
            <FaTimes />
          </button>

          <p className="content">
            Game List Project is a pure front-end React project that utilizes
            API from Freetogame.com. I am so grateful to them. This project was
            developed by ReactJs along with React hooks such as useState,
            useEffect, useReducer and Context API. This application displays
            game profile derived from Freetogame API and manipulates in a few
            ways such as filtering and getting them in to a list of favourite
            games. I do wish that gamers or non-gamers who drop by will more or
            less enjoy this website. Maybe you can find out your new favourite
            here. <br />
            <br />
            Cheers,
            <br />
            Sarun
          </p>
        </div>
      </div>
    </ModalContainer>
  );
};

const ModalContainer = styled.div`
  .modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: grid;
    place-items: center;
    transition: var(--transition);
    visibility: hidden;
    z-index: -1;
  }
  .content {
    text-align: left;
    padding: 0.5rem 2rem;
  }
  .show-modal {
    visibility: visible;
    z-index: 10;
  }

  .modal-container {
    background: var(--clr-white);
    border-radius: var(--radius);
    width: 90vw;
    height: 60vh;
    max-width: var(--fixed-width);
    text-align: center;

    position: relative;
    padding: 1rem;
  }
  .close-modal-btn {
    position: absolute;
    top: 1rem;
    right: 1rem;
    font-size: 2rem;
    background: transparent;
    border-color: transparent;
    color: var(--clr-red-dark);
    cursor: pointer;
  }
  .title {
    margin-top: 4.5rem;
  }
`;

export default MeModal;
