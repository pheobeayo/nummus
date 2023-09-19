
import React from "react";
import {

    ProfileParent,
    ProfileWrapper,
    Wrapper,
    Header,
} from "./profile.styles";
import FormButton from "../../components/custom-button/FormButton";
import FormTextInput from "../../components/custom-input/FormTextInput";









const Profile = () => {


    return (
        <ProfileParent>
            <ProfileWrapper>
                <Wrapper>

                    <form>

                        <Header>

                            <h3>Information</h3>


                        </Header>



                        <FormTextInput
                            placeholder="@james64"
                            name="fullName"

                        />
                        <FormTextInput
                            placeholder="James@gmail.com"
                            name="emailAddress"

                        />

                        <FormTextInput
                            placeholder="Phone Number"
                            name="phoneNumber"

                        />

                        <FormTextInput
                            labelName="Security"
                            placeholder="Two-Factor Authentication"
                            name="code"

                        />

                        <FormTextInput
                            labelName="Setting"
                            placeholder="Verify Account"
                            name="account"

                        />

                        <FormTextInput
                            labelName="Account"
                            placeholder="Delete Account"
                            name="account"

                        />




                        <FormButton
                            text="SIGN OUT"
                            color="#FFEB3A"
                            borderColor="#FB0909"
                            backgroundColor="#FB0909"
                        />



                    </form>

                </Wrapper>

            </ProfileWrapper>
        </ProfileParent>

    );
};

export default Profile;