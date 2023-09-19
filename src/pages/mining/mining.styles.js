import styled from "styled-components";
import { device } from "../../utils/device";

export const MiningParent = styled.div`
    width: 110vw;
    height: 240vh;
    display: flex;
    flex-direction: column;
    background:#5B3E04;

     `;

export const MiningWrapper = styled.div`
    width: 100vw;
    height: 240vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background:#5B3E04;

    @media ${device.laptopL} { 
        max-width: 1400px;
        }
    
     @media ${device.desktop} {
        max-width: 2500px;
        }
     @media ${device.mobileL} {
            max-width: 425px;
            }

    @media ${device.mobileM} {
                max-width: 375px;
                }

    @media ${device.mobileS} {
                    max-width: 320px;
                    }
                          

    `;


export const Wrapper = styled.div`
    width: 50vw;
    height: 230vh;
    background:#5B3E04;
    border-radius:10px;
    border:3px solid #F5F5F5;
    margin-left: 23rem;
    margin-top:3rem;
   
    
   
    
    `;


export const Header = styled.div`
    width: 20%;
    height: 15%;
    display: flex;
    border-radius:10px;
    flex-direction: column;
    align-items: center;
    justify-content:center;
    align-content: center;
    color:#000;
    background:#5B3E04;


    & h3 {
        font-size:1.2rem;
        font-weight:600;
        line-height:0.1rem;
        color:#FFEB3A;
        
    
        
    }

    & h4 {
        font-size:1rem;
        font-weight:600;
        line-height:0.1rem;
        color:#FFF;
        
    
        
    }

   

    & img {
        margin-left:9rem;
    }
      
    
    `;
export const SubHeader = styled.div`
    width: 80%;
    height: 8%;
    display: flex;
    flex-direction: column;
    background:#A16D05;
    margin-top: 3rem;
    padding: 2rem;
    border-radius:10px;
    margin-left: 2rem;


    & h3 {
        font-size:1.2rem;
        font-weight:600;
        line-height:0.1rem;
        color:#FFEB3A;
        
    
        
    }
  
    
    `;

export const SubHeader2 = styled.div`
    width: 80%;
    height: 20%;
    display: flex;
    flex-direction: column;
    background:#A16D05;
    margin-top: 3rem;
    padding: 2rem;
    border-radius:10px;
    margin-left: 2rem;


    & img {
        width: 12rem;
        margin-left: 11rem;
    }


  
    
    `;
export const SubHeader3 = styled.div`
    width: 80%;
    height: 8%;
    display: flex;
    flex-direction: column;
    background:#fff;
    margin-top: 3rem;
    padding: 2rem;
    border-radius:10px;
    margin-left: 2rem;


    & h6 {
        font-size:1.2rem;
        font-weight:600;
        line-height:0.1rem;
        color:#000;
        
    
        
    }
  
    
    `; 

export const SearchBarContainer = styled.div`
  display: flex;
  width:  90%;
  height: 40%;
 
  
  
`;

export const SearchBarForm = styled.div`
  display: flex;
  width: 100%;
  height: 5%;
  border: 1px solid #000;
  border-radius: 15px;
  height: 90%;
  background: #fff;

  & .search-input {
    border: 0;
    outline: none;
    background: #fff;
    color: #000;
    font-size: 1rem;
    margin-left:3rem;
    

  }
  & .search-input::placeholder {
    color: #fff;
    font-size: 0.7rem;
    margin-left: 1rem;
    margin-top: 2rem;
  }

  & label{
    color:#000;
  }
  
`;
 
    
    export const SubHeader4 = styled.div`
    width: 80%;
    height: 8%;
    background:#A16D05;
    margin-top: 3rem;
    padding: 2rem;
    border-radius:10px;
    margin-left: 2rem;

    & h3 {
        font-size:1.2rem;
        font-weight:600;
        line-height:0.1rem;
        color:#FFEB3A;
        
    
        
    }
  
  
    
    `;   

export const ButtonWrapper = styled.div`
    display: flex;
    margin-left: 4.5rem;
    
   
`;  


export const SButton= styled.button`
display: flex;
background:#FFEB3A;
width:12rem;
border: 1px solid #FFEB3A ; 
border-radius:5px;
color:#000;
height: 4rem;
align-items: center;
justify-content: center;
margin-top: 3rem;




`;

export const GButton= styled.button`
display: flex;
background:#332303;
width:12rem;
border: 1px solid #332303; 
border-radius:5px;
color:#FFEB3A;
height: 4rem;
align-items: center;
justify-content: center;
margin-top: 3rem;
margin-left: 2rem;




`;