import styled from "styled-components";
import { device } from "../../utils/device";

export const MenuParent = styled.div`
    width: 110vw;
    height: 150vh;
    display: flex;
    flex-direction: column;
    background:#EEF0ED;

     `;

export const MenuWrapper = styled.div`
    width: 100vw;
    height: 110vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background:#EEF0ED;

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
    height: 110vh;
    background:#EEF0ED;
    border-radius:10px;
    border:1px solid #6C250E;
    margin-left: 23rem;
    margin-top:3rem;
   
    
   
    
    `;


export const Header = styled.div`
    width: 100%;
    height: 20%;
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
    width: 100%;
    height: 5%;
    display: flex;
    flex-direction: column;
    background:#FFEB3A;


  
    
    `;

export const ButtonWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-left: 2rem;
   


  
    
    `;  


