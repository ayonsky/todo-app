import styled from "styled-components";

export const Form = styled.form`
  margin-bottom: 32px;
`;

export const Input = styled.input`
  padding: 14px 32px 14px 16px;
  border-radius: 4px 0 0 4px;
  border: 2px solid ${({ editing }) => (editing ? "#149fff" : "#5d0cff")};
  outline: none;
  width: 320px;
  background: transparent;
  color: #fff;

  &::placeholder {
    color: #e2e2e2;
  }
`;

export const Button = styled.button`
  border: none;
  border-radius: 0 4px 4px 0;
  cursor: pointer;
  outline: none;
  color: #fff;
  text-transform: capitalize;

  ${({ editing }) =>
    editing
      ? `
			background: linear-gradient(
				90deg,
				rgba(20, 159, 255, 1) 0%,
				rgba(17, 122, 255, 1) 100%
			);
			padding: 16px 22px;`
      : `
			background: linear-gradient(
				90deg,
				rgba(93, 12, 255, 1) 0%,
				rgba(155, 0, 250, 1) 100%
			);
			padding: 16px;`};
`;
