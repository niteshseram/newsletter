import styled from "styled-components";
import { device } from "../../Devices";

export const FormContainer = styled.div`
  max-width: 928px;
  width: 100%;
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.white};

  border-radius: 2.25rem;
  padding: 1.5rem;

  @media ${device.sm} {
    flex-direction: column-reverse;
    padding: 0;
    border-radius: 0;
    min-height: 100vh;
  }
`;

export const FormDesktopImage = styled.img`
  width: 400px;
  height: 100%;
  border-top-right-radius: 1rem;
  border-bottom-right-radius: 1rem;
  display: block;
  @media ${device.sm} {
    display: none;
  }
`;

export const FormMobileImage = styled.img`
  width: 100%;
  height: auto;
  border-bottom-left-radius: 1rem;
  border-bottom-right-radius: 1rem;
  display: none;
  @media ${device.sm} {
    display: block;
  }
`;

export const FormContent = styled.div`
  flex: 1;
  margin: 0 4rem 0 2.5rem;
  display: flex;
  flex-direction: column;
  gap: 2.5rem;

  @media ${device.sm} {
    margin: 2.5rem 1.5rem;
  }
`;

export const FormInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const Heading = styled.div`
  font-size: ${({ theme }) => theme.fontSize.heading};
  font-weight: 700;
  line-height: 100%;
  @media ${device.sm} {
    font-size: ${({ theme }) => theme.fontSize.smallHeading};
  }
`;

export const List = styled.ol`
  display: flex;
  flex-direction: column;
  gap: 0.625rem;
`;

export const ListItem = styled.li`
  display: flex;
  gap: 1rem;
  &:before {
    content: url("./icon-list.svg");
    display: block;
    height: 21px;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;
