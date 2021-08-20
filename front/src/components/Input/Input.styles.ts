import styled from 'styled-components';

export const InputWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 12px;
  width: 100%;

  label{
    width: 100%;
    font-weight: 500;
    color: #666;
  }

  input {
    width: 100%;
    border: 1px solid #ebebeb;
    height: 42px;
    border-radius: 4px;
    padding-left: 8px;
    color: #363636;

    &:focus{
      animation: treme 0.1s;
      animation-iteration-count: 3;
    }
  }
`;