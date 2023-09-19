import styled from "styled-components";

export const FormLabel = styled.label`
  color: #000;
  font-weight: 400;
  font-size: 1rem;
  line-height: 1rem;
  margin-top: 2rem;
  margin-left: 3rem;
`;

export const FormControl = styled.div`
  display: flex;
  width: ${(props) => (props.width ? props.width : "75%")};
  border: 1px solid #000;
  border-radius: 5px;
  height: ${(props) => (props.width ? props.width : "5%")};
  padding: 0 1rem;
  background: #ffff;
  margin-top: 1rem;
  margin-left: 3rem;

  & .form-input {
    border: 0;
    outline: none;
    flex: 1;
    background: #fff;
    color: #000;
    font-size: 1rem;
  }

  & .form-input::placeholder {
    color: #000;
    line-height: 20px;
    font-size: 0.8rem;
  }

`;