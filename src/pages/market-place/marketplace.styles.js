import styled from "styled-components";
import { device } from "../../utils/device";


export const MarketParent = styled.div`
    width: 100vw;
    height: 120vh;
    display: flex;
    flex-direction: column;
    background:#F5F5F5;
    z-index:3;

     `;

export const MarketWrapper = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background:#F5F5F5;

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
    background:#F5F5F5;
    border-radius:10px;
    border:3px solid #5B3E04;
    margin-left: 23rem;
    margin-top:3rem;
   
    
   
    
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
    background:#F5F5F5;
    margin-left:16rem;


    & h3 {
        font-size:1.2rem;
        font-weight:600;
        line-height:0.1rem;
        color:#5B3E04;
        
    
        
    }    
    `;


export const SubHeader2 = styled.div`
    width: 80%;
    height: 70%;
    display: flex;
    flex-direction: column;
    background-image:url(../../assets/coin.svg);
    margin-top: 3rem;
    padding: 2rem;
    border-radius:10px;
    margin-left: 2rem;


    


    & h1{
        color:#5B3E04;
        font-size: 2rem;
        margin-left:13.5rem;
        line-height: 3rem;
    }

   & img{
    width: 18rem;
    margin-left: 20.5rem;
    margin-bottom:1rem;
   }
    
    `;

    export const Overlay = styled.div`
    width: 50vw;
    height: 98.5%;
    display: flex;   
    z-index:auto;
    position: absolute;
    background:  rgba(30, 0, 0, 0.2);
    content: '';
   

   
    `;   








