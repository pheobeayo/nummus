
import React from "react";
import {

    MiningTrackParent,
    MiningTrackWrapper,
    Wrapper,
    Header,
    SubHeader2,
    GButton,
   



} from "./mining.track.styles";

import coin from "../../assets/coin.svg";











const MiningTrack = () => {


    return (
        <MiningTrackParent>
            <MiningTrackWrapper>
                <Wrapper>



                    <Header>

                        <h3>Mining Track</h3>
                       

                    </Header>
                    
                    <SubHeader2>
                        <img src={coin} alt='coin' />
                       <h1>5.0000</h1>
                       <h6>00:00:00 AM</h6>
                            <GButton>Start Mining</GButton>
                    </SubHeader2>
                    
                   




                </Wrapper>

            </MiningTrackWrapper>
        </MiningTrackParent>

    );
};

export default MiningTrack;