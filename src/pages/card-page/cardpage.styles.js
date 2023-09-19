import styled from "styled-components";
import { device } from "../../utils/device";


export const CardParent = styled.div`
    width: 100vw;
    height: 120vh;
    display: flex;
    flex-direction: column;
    background:#fff;
    

     `;

export const CardWrapper = styled.div`
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
   
   
    
   
    
    `;


export const Header = styled.div`
width: 100%;
position: absolute;
top: 15%;
left: 35%;
transform: translate(-50%, -50%);
color:#fff;
align-content:center;
justify-content: center;


    & h3 {
        font-size:1.5rem;
        font-weight:700;
        line-height:0.1rem;
        color:#fff;
        margin-left:55rem;
        
    
        
    }    
    `;


export const SubHeader2 = styled.div`
width: 100%;
position: absolute;
top: 50%;
left: 35%;
transform: translate(-50%, -50%);
color:#fff;
align-content:center;
justify-content: center;
    
    
    


    


    & h1{
        color:#fff;
        font-size: 2rem;
        margin-left:13.5rem;
        line-height: 3rem;
        margin-left:55rem;
        font-weight:700;
    }

   & img{
     width: 18rem;
     margin-left: 50rem;
     margin-bottom:1rem;
   }
    
    `;


    export const Overlay = styled.div`
    width: 50vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    z-index:auto;
    justify-content: center;
    position: absolute;
    background: rgba(0.6,0, 50, 0.1);
    content: '';
   

   
    `;








