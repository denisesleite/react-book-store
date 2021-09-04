import styled from 'styled-components';

export const ElementLi = styled.li`
  display: flex;
  background: #fff;
  border-radius: 5px;
  cursor: pointer;
  box-shadow: 6px 4px 15px 2px #ccc;
  transition: all .3s ease;

  &:hover {
    transform: translateY(-5px);
  }

  img{
    width: 100%;
    height: 100%;
    border-radius: 5px 0 0 5px;
    object-fit: cover;
  }
`;

export const LiContent = styled.div`
  padding: 15px;

  p {
    font-size: 12px;
  }
`;