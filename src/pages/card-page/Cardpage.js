
import React from "react";
import {
    CardParent,
    CardWrapper,
    Wrapper,
    Header,
    SubHeader2,
    Overlay,

} from "./cardpage.styles";
import coin from "../../assets/coin.svg";
import card from "../../assets/card.svg";












const Cardpage = () => {


    return (
        <CardParent>
            <CardWrapper>
                <Wrapper>
                    <Overlay></Overlay>
                    <div style={{
                        backgroundImage: `url(${coin})`, backgroundRepeat: "no-repeat", backgroundSize: "50vw 100vh",
                        height: 800, width: 1800,
                    }}></div>


                    <Header>

                        <h3>ACCESS CARD</h3>

                        
                    </Header>

                    <SubHeader2>
                        <img src={card} alt='card' />

                        <h1>COMING
                            <br></br>SOON...
                        </h1>


                    </SubHeader2>






                </Wrapper>

            </CardWrapper>
        </CardParent>

    );
};

export default Cardpage;