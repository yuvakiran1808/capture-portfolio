import styled from 'styled-components';
export const About = styled.div`
    min-height: 90vh;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 4rem 5rem;
    color: white;
`;
export const Description = styled.div`
z-index: 2;
  flex: 1 ;
  padding-right: 5rem;
  h2{
      font-weight: lighter;
  }
`;

export const Image = styled.div`
z-index: 2;
  flex: 1;
  overflow: hidden;
  img{
      height: 80vh;
      width: 100%;
      object-fit: cover;
  }
`;
export const Hide = styled.div`
     overflow: hidden;
`;