import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
`;

export const Section = styled.section`
  width:50%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 0 20px;
  justify-content: center;

  &:last-child{
    background: #faf7f5;
  }

  > img {
    width: 65%;
  }

  > div {
    padding-bottom: 28px;
  }

  h1 {
    text-align: center;
    margin-bottom: 15px;
    font-family: 'Lobster', cursive;
    color: #b39d88;
  }
  
  form {
    width: 50%;
    margin: 0 auto;

    button {
      margin: 25px auto;
    }
  }
`;