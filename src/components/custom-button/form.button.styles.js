import styled from "styled-components";

export const NavigateButton = styled.button`
  margin-top: 2.1rem;
  background: ${(props) =>
    props.backgroundColor ? props.backgroundColor : "#6C250E"};
  border-radius: 4px;
  padding: 12px 30px;
  width: ${(props) => (props.width ? props.width : "28rem")};
  height: 2.4rem;
  color: ${(props) => (props.color ? props.color : "#fff")};
  font-weight: 500;
  font-size: 1.4rem;
  line-height: 15px;
  border: 1px solid
    ${(props) => (props.borderColor ? props.borderColor : "#6C250E")};
  display: block;
  outline: none;
  margin-left:5rem;
`;
