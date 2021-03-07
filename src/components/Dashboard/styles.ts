import  styled  from 'styled-components';


export const Container = styled.div`
  width: 100%;
  background: var(--primary-background);
`;

export const Header = styled.header`
  display: flex;
  height: 4rem;
  justify-content: space-between;


  div {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    margin-left: 3.9rem;

    a {
      width: 4.6rem;
      height: 2rem;

      display: flex;
      align-items: center;
      justify-content: center;

      font-weight: 400;
      transition: backgrond-color 0.2s;
      border-radius: 0.8rem;
      padding: 1rem;
      cursor: pointer;

        &:hover {
        background: #252942;
      }

      &:first-child {
        background: #252942;
      }
    }
   
  }

`;

export const TitleContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 2.6rem;
  margin-left: 3.7rem;

  h1 {
    font-size: 1.8rem;
  }
/* 
  label {
    font-weight: 400;
  }

  select {
    font-size: 1rem;
    font: 500 1rem "Jost", sans-serif;
    background: none;
    border: 0;
    color: var(--text);
    margin-right: 0.8rem;
    cursor: pointer;
  }

  select option {
    color: var(--text);
    background: #3A4261;

  } */

  form {
    width: 32.5rem;

    display: flex;
    align-items: center;
    justify-content: center;
 }
 svg:first-child {
    margin-right: 1rem;
 }

`;

export const Content = styled.main`
  margin-left: 3.7rem;
  margin-top: 2rem;

div {
  position: relative;
  width: 172px;
  height: 242px; 
  display: inline-block;
  align-items: center;
  justify-content: center;
  
  margin-right: 1rem; 
  margin-bottom: 2rem;  
  border-radius: 0.8rem;
  border: 2px solid #0C0F28;
  transition: all 0.4s;


  img {
    width: 156px;
    height: 225px;
    border-radius: 0.8rem;
 
    transition: all 0.4s;
    cursor: pointer;

    &:hover {
      /* border: 2px solid #029AEB;
      box-shadow: 0 0 5px #029AEB;
      padding: 0.6rem; */
    }
   
  }

  .game-name {
      visibility: hidden;
      position: absolute;
      display: flex;
      cursor: pointer;

      flex-direction: column;
      align-items: center;
      justify-content: center;
      
      text-align: center;
      font-size: 1rem;

      bottom: 2%;
      max-width: 125px;
      left: 18%;
      transition: all 0.4s;
      opacity: 0;
      

      svg {
        margin-top: 0.5rem;
      }

    }

    &:hover {
      border: 2px solid #029AEB;
      box-shadow: 0 0 5px #029AEB;
      padding: 0.4rem;      
    }
    &:hover img{
      opacity: 0.5;
    }

    &:hover .game-name {
      visibility: visible;
      bottom: 10%;
      opacity: 1;
      z-index: 2;
    }     
}

 
`;
