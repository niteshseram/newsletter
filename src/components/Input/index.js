import {
  Error,
  InputContainer,
  InputWrapper,
  Label,
  LabelWrapper,
} from "./Input.styled";

export default function Input({ value, onChange, hasError }) {
  return (
    <InputWrapper>
      <LabelWrapper>
        <Label>Email address</Label>
        {hasError && <Error>Valid email required</Error>}
      </LabelWrapper>
      <InputContainer
        hasError={hasError}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="email@company.com"
      />
    </InputWrapper>
  );
}
