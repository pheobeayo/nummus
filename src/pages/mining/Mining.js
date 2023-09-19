
import React from "react";
import {

    MiningParent,
    MiningWrapper,
    Wrapper,
    Header,
    SubHeader,
    SubHeader2,
    SubHeader3,
    SubHeader4,
    SButton,
    GButton,
    ButtonWrapper,
    SearchBarForm,
    SearchBarContainer



} from "./mining.styles";

import coin from "../../assets/coin.svg";











const Mining = () => {


    return (
        <MiningParent>
            <MiningWrapper>
                <Wrapper>



                    <Header>

                        <h3>User</h3>
                        <h4>User ID:</h4>

                    </Header>
                    <SubHeader>
                        <h3>Ranking</h3>
                    </SubHeader>
                    <SubHeader2>
                        <img src={coin} alt='coin' />
                        <ButtonWrapper> <SButton>Share</SButton>
                            <GButton>Go Mining</GButton></ButtonWrapper>
                    </SubHeader2>
                    <SubHeader3>
                        <h6>Referral Link</h6>
                        <SearchBarContainer>
                            
                            <SearchBarForm>
                                <input
                                    label='Referal link'
                                    type="text"
                                    className="search-input"
                                    placeholder="Search..."
                                />
                            </SearchBarForm>
                        </SearchBarContainer>
                    </SubHeader3>
                    <SubHeader4>
                        <h3>My Earnings</h3>
                        <hr />
                    </SubHeader4>





                </Wrapper>

            </MiningWrapper>
        </MiningParent>

    );
};

export default Mining;