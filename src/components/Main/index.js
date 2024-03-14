import { useState } from "react";
import FormCard from "../FormCard";
import { MainContainer } from "./Main.styled";
import Success from "../Success";

export default function Main() {
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [email, setEmail] = useState("");
  return (
    <MainContainer>
      {showSuccessMessage ? (
        <Success
          email={email}
          onDismiss={() => {
            setShowSuccessMessage(false);
            setEmail("");
          }}
        />
      ) : (
        <FormCard
          setShowSuccessMessage={setShowSuccessMessage}
          email={email}
          setEmail={setEmail}
        />
      )}
    </MainContainer>
  );
}
