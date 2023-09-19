import styled from "styled-components";
import { device } from "../../utils/device";
import img from "../../assets/landingimage.svg"


export const HomeParent = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    
`;

export const HomeWrapper = styled.div`
     width: 100vw;
     height: 100vh;
     display: flex;
     flex-direction: column;
     

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




export const CentreWrapper = styled.div`
     width: 100vw;
     height: 100vh;
     display: flex;
     flex-direction: column;
     background-image:url(${img});
 
   
      `;



