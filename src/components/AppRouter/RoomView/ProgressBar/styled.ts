import styled from "styled-components";

export const Input = styled.input`
  -webkit-appearance: none;
  appearance: none;
  background: transparent;
  cursor: pointer;
  width: 100%;
  margin-bottom: 15px;

  // Track styles
  &::-webkit-slider-runnable-track {
    background: #ffebe7;
    height: 8px;
    border-radius: 8px;
  }
  &::moz-range-track {
    background: #ffebe7;
    height: 8px;
    border-radius: 8px;
  }

  // Thumb styles
  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    height: 22px;
    width: 22px;
    background-color: #ffa08b;
    border-radius: 22px;
    border: 5px solid #ffffff;
    margin-top: -7px;
    transition: 0.2s;
    cursor: grab;
  }
  &::-moz-range-thumb {
    border: 5px solid #ffffff;
    border-radius: 22px;
    height: 22px;
    width: 22px;
    background-color: #ffa08b;
    transition: 0.2s;
    cursor: grab;
  }

  // Focus styles
  &:focus {
    outline: none;
  }
  &:focus::-webkit-slider-thumb {
    box-shadow: 0px 0px 8px 0px rgba(255, 255, 255, 1);
  }
  &:focus::-moz-range-thumb {
    box-shadow: 0px 0px 8px 0px rgba(255, 255, 255, 1);
  }

  // Hover styles
  &:hover::-webkit-slider-thumb {
    border: 4px solid #ffffff;
  }
  &:hover::-moz-range-thumb {
    border: 4px solid #ffffff;
  }

  // Active styles
  &:active::-webkit-slider-thumb {
    cursor: grabbing;
  }
  &:active::-moz-range-thumb {
    cursor: grabbing;
  }
`;