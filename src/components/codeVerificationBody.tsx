import React, { useState } from 'react';
import { Button } from '@mui/material'
import ChevronRight from '@mui/icons-material/ChevronRight';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import Link from 'next/link'
import CodeInput from 'react-verification-code-input';
import {
    useAppSelector,
} from '../app/hooks';

const container = css`
height: 100vh;
width: 100%;
background-color: '#fff';
padding: 70px 30px;

`;

const textStyle = css`
font-style: normal;
font-weight: 500;
font-size: 14px;
line-height: 24px;
text-align: center;
color: #414047;
margin-bottom: 30px;
span{
    font-size: 16px;
color: #587BE0;
display: block
}
`;

const inputLabel = css`
font-style: normal;
font-weight: 500;
font-size: 14px;
line-height: 24px;
text-align: center;
color: #808080;
`;
const linkTextStyle = css`
font-style: normal;
font-weight: 500;
font-size: 14px;
line-height: 24px;
text-align: center;
color: #587BE0;
margin-bottom: 30px;
`;

const centerContainer = css`
width: 100%;
background-color: '#fff';
justify-content: center;
display: flex;
`;

const line = css`
margin-bottom: 20px
`;


const SignUpForm: React.FC = (props) => {
    const [code, setCode] = useState('')
    const value: string = useAppSelector(state => state.auth.signUpFormValues.value);
    const type: string = useAppSelector(state => state.auth.signUpFormValues.type);

    
    const BtnCustom = styled(Button)`
    display: flex;
    align-items: center;
    padding: 0px 10px 0px 20px;
    background: ${code ? '#885FFF' : '#BEBEC2'} !important;
    color: #fff;
    border-radius: 10px;
    min-width: 124px;
    height: 40px;
    margin-top:20px;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    text-transform: none;
    margin-top: 30px;
    margin-bottom: 30px;
`

    return (
        <div css={container}>
            <p css={textStyle}>
                We have sent a 6-digit verification code to the {type === 'phone' ? 'phone number' : 'email address'}
                <span>{value}</span>
            </p>
            <p css={textStyle}>
                Enter verification code
            </p>
            <p css={inputLabel}>
                Did not receive your code?
            </p>
            <CodeInput
                className={'codeVerification'}
                onComplete={setCode
                } />
            <div css={centerContainer}>
                <BtnCustom type='submit' endIcon={<ChevronRight style={{ fontSize: 30 }} />}>{'Continue'}</BtnCustom>
            </div>
            {/* <p css={termsConditions}>
                by clicking continue you must agree to near labs <a href='#'>Terms & Conditions</a> and <a href='#'>Privacy Policy</a>
            </p>*/}
            <hr css={line} />

            <p css={textStyle}>
                Did not receive your code?
            </p>
            <p css={linkTextStyle}>
                <Link href='/'>{`Send to a different ${type === 'phone' ? 'phone number' : 'email address'}`}</Link>
            </p>
            <p css={linkTextStyle}>
                Resend your code
            </p>


        </div >
    )

};

export default SignUpForm;

