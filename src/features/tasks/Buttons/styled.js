import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  @media (max-width: ${({theme}) => theme.breakpoints.mobile}px) {
    flex-direction: column;
  }
`;

export const Button = styled.button`
  border: none;
  background-color: transparent;
  color: teal;
  transition: opacity 150ms;

  &:hover {
    opacity: 0.8;
  }

  &:disabled {
    color: #c1c4c4;
  }
`;
