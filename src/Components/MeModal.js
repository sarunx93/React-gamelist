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
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet,
            eligendi accusamus hic ducimus dolore eos fugit corrupti dolor id
            consequuntur? Nobis beatae nemo debitis enim pariatur adipisci
            repellendus. Eos pariatur ullam ipsum quidem deserunt sed?
            Dignissimos sapiente vel, perferendis explicabo aut magni alias
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet,
            eligendi accusamus hic ducimus dolore eos fugit corrupti dolor id
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
