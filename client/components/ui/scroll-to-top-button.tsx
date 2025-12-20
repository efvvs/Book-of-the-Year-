import React from 'react';
import styled from 'styled-components';

const ScrollToTopButton = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <StyledWrapper>
      <button className="button" onClick={scrollToTop} aria-label="回到顶部">
        <div className="styled-wrapper">
          <button className="button">
            <div className="button-box">
              <span className="button-elem">
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="arrow-icon">
                  <path fill="black" d="M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z" />
                </svg>
              </span>
              <span className="button-elem">
                <svg fill="black" viewBox="0 0  24 24" xmlns="http://www.w3.org/2000/svg" className="arrow-icon">
                  <path d="M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z" />
                </svg>
              </span>
            </div>
          </button>
        </div>
      </button>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
position: fixed;
right: 10px;
bottom: 60px;
z-index: 1000;
   .styled-wrapper .button {
    display: block;
    position: relative;
    width: 76px;
    height: 76px;
    margin: 0;
    overflow: hidden;
    outline: none;
    background-color: transparent;
    cursor: pointer;
    border: 0;
  }

  .styled-wrapper .button:before {
    content: "";
    position: absolute;
    border-radius: 50%;
    inset: 7px;
    border: 3px solid black; /* Update dynamically for light/dark mode */
    transition:
      opacity 0.4s cubic-bezier(0.77, 0, 0.175, 1) 80ms,
      transform 0.5s cubic-bezier(0.455, 0.03, 0.515, 0.955) 80ms;
  }

  .styled-wrapper .button:after {
    content: "";
    position: absolute;
    border-radius: 50%;
    inset: 7px;
    border: 4px solid #599a53;
    transform: scale(1.3);
    transition:
      opacity 0.4s cubic-bezier(0.165, 0.84, 0.44, 1),
      transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    opacity: 0;
  }

  .styled-wrapper .button:hover:before,
  .styled-wrapper .button:focus:before {
    opacity: 0;
    transform: scale(0.7);
    transition:
      opacity 0.4s cubic-bezier(0.165, 0.84, 0.44, 1),
      transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  }

  .styled-wrapper .button:hover:after,
  .styled-wrapper .button:focus:after {
    opacity: 1;
    transform: scale(1);
    transition:
      opacity 0.4s cubic-bezier(0.77, 0, 0.175, 1) 80ms,
      transform 0.5s cubic-bezier(0.455, 0.03, 0.515, 0.955) 80ms;
  }

  .styled-wrapper .button-box {
    display: flex;
    position: absolute;
    top: 0;
    left: 0;
  }

  .styled-wrapper .button-elem {
    display: block;
    width: 30px;
    height: 30px;
    margin: 24px 18px 0 22px;
    transform: rotate(360deg);
    fill: #f0eeef;
  }

  .styled-wrapper .button:hover .button-box,
  .styled-wrapper .button:focus .button-box {
    transition: 0.4s;
    transform: translateX(-69px);
  }`;

export default ScrollToTopButton;

