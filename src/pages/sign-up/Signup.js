import React, { useState } from "react";
import {
    Check,
    SignupParent,
    SignupWrapper,
    Wrapper,
    FormHeader,
    FormFooter
} from "./sign.up.styles";
import { Link } from "react-router-dom";
import FormTextInput from "../../components/custom-input/FormTextInput";
import FormButton from "../../components/custom-button/FormButton";
import Checkbox from "../../components/checkbox/Checkbox";
import { FcGoogle } from 'react-icons/fc';
import { FaFacebook } from "react-icons/fa";
import { Button, Center, Text, Stack } from '@chakra-ui/react';











const Signup = () => {
    const [checked, setChecked] = useState(false);
    const onChange = () => {
        setChecked(!checked);
    };




    return (
        <SignupParent>
            <SignupWrapper>
                <Wrapper>

                    <form>
                        <FormHeader>
                            
                            <h3>Sign up</h3>


                        </FormHeader>
                        <FormTextInput
                            labelName="Full Name"
                            placeholder="John Doe "
                            name="fullName"

                        />
                        <FormTextInput
                            labelName="Mobile Number"
                            placeholder="+234"
                            name="mobileNumber"

                        />
                        <FormTextInput
                            labelName="Email address"
                            placeholder="sample@me.com"
                            name="emailAddress"

                        />
                        <FormTextInput
                            labelName="Referal code"
                            placeholder="Nigeria"
                            name="code"

                        />

                        <FormTextInput
                            labelName="Password"
                            placeholder="********"
                            name="password"

                        />


                        <Check>
                            <Checkbox
                                id="checkbox"
                                label="Remember me"
                                value={checked}
                                onChange={onChange}
                                fontSize='0.5rem'
                            />

                            <Checkbox
                                id="checkbox"
                                label="By signing up you accept our Terms of Service and Privacy Policy."
                                value={checked}
                                onChange={onChange}
                                fontSize='0.5rem'
                            />
                        </Check>
                        <FormButton
                            text="Sign up"
                            color="#fff"
                            borderColor="#6C250E"


                        />
                        <div style={{ display: "flex", alignItems: "center" }}>
                            <div
                                style={{ flex: 1, backgroundColor: "#000000", height: "1px", width: '10px' }}
                            />

                            <p style={{ margin: "0 10px" }}>or</p>

                            <div
                                style={{ flex: 1, backgroundColor: "#000000", height: "1px" }}
                            />
                        </div>
                        <Center p={8}>
                            <Stack spacing={4} align={'center'} maxW={'md'} w={'full'}>

                                <Button w={'full'} maxW={'md'} colorScheme={'blue'} borderRadius={'7px'} width={'25rem'} height={'2rem'} leftIcon={<FaFacebook />}>
                                    <Center>
                                        <Text>Continue with Facebook</Text>
                                    </Center>
                                </Button>
                                <Button w={'full'} maxW={'md'} variant={'outline'} borderRadius={'7px'} width={'25rem'} height={'2rem'} leftIcon={<FcGoogle />}>
                                    <Center>
                                        <Text>Continue in with Google</Text>
                                    </Center>
                                </Button>
                            </Stack>
                        </Center>

                        <FormFooter>  <p>Already have an account? <Link to="/sign-in" style={{ textDecoration: 'none', color: 'blue' }}>Sign in</Link></p>
                        </FormFooter>

                    </form>


                </Wrapper>
            </SignupWrapper>
        </SignupParent>

    );
};

export default Signup;