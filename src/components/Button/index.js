import { ButtonContainer } from "./Button.styled";

export default function Button({ label }) {
  return <ButtonContainer type="submit">{label}</ButtonContainer>;
}
