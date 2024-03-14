import styled from "styled-components";

export const InputContainer = styled.input`
  border: ${({ theme, hasError }) =>
    `1px solid  ${hasError ? theme.colors.primary : theme.colors.grey}`};
  padding: 1rem 1.5rem;
  border-radius: 0.5rem;
  width: 100%;
  font-size: inherit;
  ${({ hasError, theme }) =>
    hasError &&
    `
    background-color: ${theme.colors.errorBg};
  `}
  &::placeholder {
    color: ${({ theme }) => theme.colors.grey};
  }
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const LabelWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 4px;
  font-weight: 700;
  font-size: ${({ theme }) => theme.fontSize.small};
`;

export const Label = styled.div``;

export const Error = styled.div`
  color: ${({ theme }) => theme.colors.primary};
`;
