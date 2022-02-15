import React, { useState } from "react";
import { FaArrowCircleUp, FaArrowCircleDown } from "react-icons/fa";
import styled from "styled-components";

const ScrollButton = () => {
  const [visible, setVisible] = useState(false);
  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  const scrollToBottom = () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: "smooth",
    });
  };
  window.addEventListener("scroll", toggleVisible);
  return (
    <Wrapper>
      <FaArrowCircleUp
        className="arrow-btn"
        onClick={scrollToTop}
        style={{ display: visible ? "inline" : "none", cursor: "pointer" }}
      />
      <FaArrowCircleDown
        className="arrow-btn"
        onClick={scrollToBottom}
        style={{ display: visible ? "inline" : "none", cursor: "pointer" }}
      />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: fixed;
  width: 100%;
  left: 83%;
  bottom: 40px;
  height: 20px;
  z-index: 1;
  .arrow-btn {
    font-size: 3rem;
    margin-left: 0.75rem;
  }
  .arrow-btn:hover {
    color: orange;
    transition: var(--transition);
  }
`;

export default ScrollButton;
