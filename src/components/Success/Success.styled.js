import styled from "styled-components";
import { device } from "../../Devices";

export const SuccessContainer = styled.form`
  max-width: 504px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  background-color: ${({ theme }) => theme.colors.white};

  border-radius: 2.25rem;
  padding: 3rem 4rem;

  @media ${device.sm} {
    padding: 1.5rem;
    border-radius: 0;
    min-height: 100vh;
  }
`;

export const SuccessSectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  @media ${device.sm} {
    flex: 1;
    justify-content: center;
  }
`;

export const SuccessImage = styled.img`
  width: 4rem;
  height: 4rem;
`;

export const SuccessContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const SuccessHeading = styled.h1`
  font-size: ${({ theme }) => theme.fontSize.heading};
  font-weight: 700;
  line-height: 100%;
`;
