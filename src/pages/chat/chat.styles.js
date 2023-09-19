import styled from "styled-components";
import { device } from "../../utils/device";


export const ChatParent = styled.div`
    width: 100vw;
    height: 120vh;
    display: flex;
    flex-direction: column;
    background:#fff;
   

     `;

export const ChatWrapper = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background:#fff;

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
    height: 100vh;
    background:#fff;
    border-radius:10px;
    border:3px solid #5B3E04;
    margin-left: 23rem;
    margin-top:3rem;
   
    
    hr{
        width:95%;
        color: #5B3E04;
    }
   
    
    `;


export const Header = styled.div`
    width: 30%;
    height: 15%;
    display: flex;
    border-radius:10px;
    flex-direction: column;
    align-items: center;
    justify-content:center;
    align-content: center;
    color:#000;
    background:#fff;
    margin-left:16rem;
    margin-top: 3rem;


    & h3 {
        font-size:1.2rem;
        font-weight:600;
        line-height:0.1rem;
        color:#5B3E04;
        
    
        
    }  
    
    
    & h4 {
        font-size:1rem;
        font-weight:600;
        line-height:0.1rem;
        color:#5B3E04;
        
    
        
    }  
    
    & h5 {
        font-size:1rem;
        font-weight:600;
        line-height:0.1rem;
        color:#BC7C1C;
        
    
        
    }    
    `;



   








