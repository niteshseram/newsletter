import styled from "styled-components";

export const ButtonContainer = styled.button`
  border: none;
  background-color: ${({ theme }) => theme.colors.slateGrey};
  color: ${({ theme }) => theme.colors.white};
  cursor: pointer;
  padding: 1rem;
  border-radius: 0.5rem;
  width: 100%;
  font-size: inherit;
  font-weight: 700;
  line-height: 1.5;

  &:hover {
    background: linear-gradient(45deg, #ff527b, #ff6a3a);
    box-shadow: ${({ theme }) => `0 25px 16px -16px ${theme.colors.primary}`};
  }
`;
