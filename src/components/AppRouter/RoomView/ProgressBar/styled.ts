import styled from "styled-components";
import { Paragraph as ImportParagraph } from "../styled";

export const TimeMarker = styled(ImportParagraph)`
  color: #ffffff;
`;

export const ProgressBarWrapper = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  margin-bottom: 15px;
`;

export const Input = styled.input`
  -webkit-appearance: none;
  appearance: none;
  background: transparent;
  cursor: pointer;
  flex-grow: 1;
  margin: 0 15px;

  // Track styles
  &::-webkit-slider-runnable-track {
    background: #ffffff;
    height: 5px;
    border-radius: 8px;
  }
  &::-moz-range-track {
    background: #ffffff;
    height: 5px;
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
    margin-top: -8px;
    transition: 0.2s;
    cursor: grab;
  }
  &::-moz-range-thumb {
    border: 5px solid #ffffff;
    border-radius: 18px;
    height: 18px;
    width: 18px;
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
