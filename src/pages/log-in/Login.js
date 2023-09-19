
import React, {useState} from "react";
import {
    Check,
    SigninParent,
    SigninWrapper,
    Wrapper,
    FormHeader,
    FormFooter,
   
} from "./sign.in.styles";
import { Link } from "react-router-dom";
import FormTextInput from "../../components/custom-input/FormTextInput";
import FormButton from "../../components/custom-button/FormButton";
import { FcGoogle } from 'react-icons/fc';
import { FaFacebook } from "react-icons/fa";
import { Button, Center, Text, Stack } from '@chakra-ui/react'
import Checkbox from "../../components/checkbox/Checkbox";
import logo from "../../assets/logo.png";








const Login = () => {

    const [checked, setChecked] = useState(false);
    const onChange = () => {
        setChecked(!checked);
    };

    return (
        <SigninParent>
            <SigninWrapper>
                <Wrapper>

                    <form>
                        
                        <FormHeader>
                        <img src={logo} alt='logo'/>
                            <h3>Log in</h3>

                            
                        </FormHeader>

                        <FormTextInput
                            labelName="Mobile Number"
                            placeholder="+234"
                            name="mobileNumber"

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
</Check>

                        <FormButton
                            text="Log in"
                            color="#fff"
                            borderColor="#6C250E"

                        />

<Link to="/forgot-password" style={{ textDecoration: 'none', color: 'blue', marginLeft:'15rem', marginTop:'2rem', marginBottom:'2rem' }}>Forgot Password?</Link>

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

                       <FormFooter><p>Don't have an account?<Link to="/sign-up" style={{ textDecoration: 'none', color: 'blue' }}>Sign up</Link></p>
                       </FormFooter> 

                    </form>

                    
                </Wrapper>

            </SigninWrapper>
        </SigninParent>

    );
};

export default Login;