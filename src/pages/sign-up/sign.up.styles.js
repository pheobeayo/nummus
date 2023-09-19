import styled from "styled-components";
import { device } from "../../utils/device";

export const SignupParent = styled.div`
    width: 100vw;
    height: 250vh;
    display: flex;
    flex-direction: column;
    background:#fff;

     `;

export const SignupWrapper = styled.div`
    width: 100vw;
    height: 150vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background:#fff;
    colour:#000;

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
    width: 75vw;
    height: 80vh;
    display: flex;
    background:#fff;
    justify-content: center;
    align-items:center;
    margin-top:2rem;
   
    
   
    & form {
        width: 100%;
        height: 130vh;
        margin-left:25rem;
        margin-top:5rem;
        color:#000;
        border-radius:10px;
        border:1px solid #6C250E;
        
        
    }
    
    & p {
        color:#000;
        line-height:1.5rem;
        
    }
    `;


    export const FormHeader = styled.div`
    width: 70%;
    height: 10%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content:center;
    align-content: center;
    color:#000;
   


    & h3 {
        
        font-size:2rem;
        font-weight:600;
        line-height:0.1rem;
        color:#000;
        margin-left:9rem;
    
        
    }
      
   
    `;


    export const FormFooter = styled.div`
    width: 70%;
    height: 20%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content:center;
    align-content: center;
    color:#000;


    & p {
        
        font-size:1rem;
        font-weight:200;
        line-height:0.1rem;
        color:#000;
        margin-left:12rem;
    
        
    }
      
    
    `;
     
  export const Check = styled.div`
    width: 100%;
    margin-left: 2.4rem;
    margin-top: 1rem;

    
      
    
    `; 
   


  