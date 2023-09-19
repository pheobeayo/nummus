
import React from "react";
import {

    MenuParent,
    MenuWrapper,
    Wrapper,
    Header,
    SubHeader,
    ButtonWrapper,


} from "./menu.styles";

import FormButton from "../../components/custom-button/FormButton";









const Menu = () => {


    return (
        <MenuParent>
            <MenuWrapper>
                <Wrapper>



                    <Header>

                        <h3>User</h3>
                        <h4>Hi Miner</h4>

                    </Header>
                    <SubHeader></SubHeader>
                    <ButtonWrapper>

                        <FormButton
                            text="Home"
                            color="#000"
                            borderColor="#fff"
                            backgroundColor="#fff"

                        />

                        <FormButton
                            text="Wallet"
                            color="#000"
                            borderColor="#fff"
                            backgroundColor="#fff"
                        />

                        <FormButton
                            text="Store"
                            color="#000"
                            borderColor="#fff"
                            backgroundColor="#fff"
                        />
                        <FormButton
                            text="Chats"
                            color="#000"
                            borderColor="#fff"
                            backgroundColor="#fff"
                        />
                        <FormButton
                            text="ATM cards"
                            color="#000"
                            borderColor="#fff"
                            backgroundColor="#fff"
                        />

                        <FormButton
                            text="Profile"
                            color="#000"
                            borderColor="#fff"
                            backgroundColor="#fff"
                        />




                    </ButtonWrapper>



                </Wrapper>

            </MenuWrapper>
        </MenuParent>

    );
};

export default Menu;