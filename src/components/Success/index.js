import Button from "../Button";
import {
  SuccessContainer,
  SuccessContent,
  SuccessHeading,
  SuccessImage,
  SuccessSectionWrapper,
} from "./Success.styled";

export default function Success({ email, onDismiss }) {
  return (
    <SuccessContainer
      onSubmit={(e) => {
        e.preventDefault();
        onDismiss();
      }}
    >
      <SuccessSectionWrapper>
        <SuccessImage src="./icon-success.svg" alt="banner" />
        <SuccessContent>
          <SuccessHeading>Thanks for subscribing!</SuccessHeading>
          <p>
            A confirmation email has been sent to <b>{email}</b>. Please open it
            and click the button inside to confirm your subscription.
          </p>
        </SuccessContent>
      </SuccessSectionWrapper>
      <SuccessSectionWrapper>
        <Button label="Dismiss message" />
      </SuccessSectionWrapper>
    </SuccessContainer>
  );
}
