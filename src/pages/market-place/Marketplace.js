
import React from "react";
import {
    MarketParent,
    MarketWrapper,
    Wrapper,
    Header,
    SubHeader2,
    Overlay
} from "./marketplace.styles";
import coin from "../../assets/coin.svg";












const Marketplace = () => {


    return (
        <MarketParent>
            <MarketWrapper>
                <Wrapper>
                <Overlay></Overlay>


                    <Header>

                        <h3>MARKET PLACE</h3>


                    </Header>

                    <SubHeader2>

                        <h1>COMING
                            <br></br>SOON...
                        </h1>
                      
                        <div><img src={coin} alt="coin"/></div>
                    </SubHeader2>






                </Wrapper>

            </MarketWrapper>
        </MarketParent>

    );
};

export default Marketplace;