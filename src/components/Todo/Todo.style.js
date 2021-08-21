import styled from "styled-components";

export const TodoRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px auto;
  color: #fff;
  background: linear-gradient(
    90deg,
    rgba(93, 12, 255, 1) 0%,
    rgba(155, 0, 250, 1) 100%
  );

  padding: 16px;
  border-radius: 5px;
  width: 90%;
  opacity: ${({ isComplete }) => (isComplete ? "0.4" : "1")};
`;

export const IconsDiv = styled.div`
  display: flex;
  align-items: center;
  font-size: 20px;
  cursor: pointer;
  color: #fff;
`;