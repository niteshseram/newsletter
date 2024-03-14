import { useState } from "react";
import Button from "../Button";
import Input from "../Input";
import {
  Form,
  FormContainer,
  FormContent,
  FormDesktopImage,
  FormInfo,
  FormMobileImage,
  Heading,
  List,
  ListItem,
} from "./Form.styled";

export default function FormCard({ setShowSuccessMessage, email, setEmail }) {
  const [isInvalidEmail, setIsInvalidEmail] = useState(false);

  const validateEmail = (e) => {
    e.preventDefault();
    const valid = String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
    setIsInvalidEmail(!valid);
    if (valid) {
      setShowSuccessMessage(true);
    }
  };

  return (
    <FormContainer>
      <FormContent>
        <FormInfo>
          <Heading>Stay updated!</Heading>
          <p>Join 60,000+ product managers receiving monthly updates on:</p>
          <List>
            <ListItem>Product discovery and building what matters</ListItem>
            <ListItem>Measuring to ensure updates are a success</ListItem>
            <ListItem>And much more!</ListItem>
          </List>
        </FormInfo>
        <Form onSubmit={(e) => validateEmail(e)}>
          <Input value={email} onChange={setEmail} hasError={isInvalidEmail} />
          <Button label="Subscribe to monthly newsletter" />
        </Form>
      </FormContent>
      <FormDesktopImage src="./illustration-sign-up-desktop.svg" alt="banner" />
      <FormMobileImage src="./illustration-sign-up-mobile.svg" alt="banner" />
    </FormContainer>
  );
}
