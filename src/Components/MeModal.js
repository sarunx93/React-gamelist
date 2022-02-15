import React from "react";
import styled from "styled-components";
import { FaTimes } from "react-icons/fa";
import { useGlobalContext } from "../Context/context";

const MeModal = () => {
  const { modalMeOpen, closeModalMe } = useGlobalContext();
  return (
    <ModalContainer>
      <div
        className={`${
          modalMeOpen ? "modal-overlay show-modal" : "modal-overlay"
        }`}
      >
        <div className="modal-container">
          <h3 className="title">About Me</h3>
          <button className="close-modal-btn" onClick={closeModalMe}>
            <FaTimes />
          </button>

          <p className="content">
            Hi there, My name is Sarun Pornaruntham, a junior front-end
            developer who enjoys improving himself and learning new skills. I'd
            like to thank anyone who comes by and checkout this small project
            and I do hope that this project could inspire those who just started
            that they can build things and will get better in every project they
            build.
            <br /> You can reach out to me at
            <a href="https://www.linkedin.com/in/sarun-p/">my LinkedIn </a>
            or visit my GitHub repo at{" "}
            <a href="https://github.com/sarunx93">my Github</a>
            <br />
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
  }
  .show-modal {
    visibility: visible;
    z-index: 10;
  }

  .modal-container {
    background: var(--clr-white);
    border-radius: var(--radius);
    width: 90vw;
    height: 50vh;
    max-width: var(--fixed-width);
    text-align: center;

    position: relative;
    padding: 0.5rem 2rem;
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
