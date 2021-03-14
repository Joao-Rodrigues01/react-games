import styled  from 'styled-components';

export const Container = styled.div`
  width: 18rem;
  background: var(--secondary-background);
  /* border-right: 1px solid #23253A; */
`;


export const Header = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 1rem 0.8rem;

    img {
      width: 3.2rem;
      height: 1.75rem;
    }

    div {
      display: flex;
      flex: 0.6;
      justify-content: space-evenly;
    }
`;

export const Section = styled.section`
  width: 100%;
  height: 26.75rem;
  /* padding-left: 1rem; */
  display: flex;
  flex-direction:column;
  justify-content: space-between;
`;

export const List = styled.div`
  width:100%;
  height: 10.875rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 2.9rem;
  margin-bottom: 1.4rem;
  
  ul {
    li {
      color: var(--text);
      margin-bottom: 0.5rem;
      width: 220px;
      height: 2rem;
      transition: background 0.4s;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      padding-left: 1rem;
      border-radius: 1rem;
      cursor: pointer;

      &:hover {
        background: #23253B;
      }

       &:first-child + li {
        background: #23253B;
      } 

    }

     .active {
      background: #23253B;
    }
    

    li:last-child {
      color: var(--blue);
      margin-top: 1.5rem;
    }
  }

`;

export const Tags = styled.div`
  color: var(--text);
  font-weight: 400;
  height: 13.75rem;
  padding-left: 1rem;

  span {
    font-size: 0.9rem;
    font-weight: bold;
    color: var(--span);
  }

  ul {
    margin-top: 1rem;

    li {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      margin-bottom: 1rem;
    

      svg {
      margin-right: 0.5rem;
      }
    }

    li:last-child {
      margin-bottom: 0;
    }
  }
`;


export const Footer = styled.footer`
  display: flex;
  flex-direction: column;

  margin-top: 11rem;
  margin-left: 1rem;

  a {
    font-size: 1rem;
    font-weight: 400;
    display: flex;
    align-items:center;
    justify-content: flex-start;
    color: var(--text);
    padding-bottom: 0.3rem;
   
   svg {
     margin-right: 0.5rem;
    }
  }
  a:last-child {
    margin-bottom: 0.3rem;
  }
`;