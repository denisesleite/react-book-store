import styled from 'styled-components';

const ElementLi = styled.li`
  background: #fff;
  border-radius: 5px;
  border: 2px solid transparent;
  padding: 15px 15px 5px;
  cursor: pointer;
  box-shadow: 6px 4px 15px 2px #ccc;
  transition: all .3s ease;

  &:hover {
    transform: translateY(-5px);
    border-color: #d5b889;
  }
`;

export default ElementLi;