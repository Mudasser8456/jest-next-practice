import React, { useState } from 'react';
import { container, centerContainer, termsConditions } from '../signup/signupForm.styles';
import { Button, Input, Box, FormHelperText, InputLabel } from '@mui/material'
import ChevronRight from '@mui/icons-material/ChevronRight';
import styled from '@emotion/styled';
import { useFormik } from "formik";
import * as yup from "yup";
import { css } from '@emotion/react'
import LogInWithNearSection from '../loginNearSection'



const NearSignupFormBody: React.FC = (props) => {

    const validationSchema = yup.object({
        fullName: yup.string().required('field required'),
        accountId: yup.string().required('field required'),

    });





    const formik = useFormik({
        initialValues: {
            fullName: '',
            accountId: ''
        },
        validationSchema: validationSchema,
        onSubmit: async (values) => {
            console.log(values);
        },
    });

    const textStyle = css`
font-style: normal;
font-weight: 500;
font-size: 14px;
line-height: 24px;
color: #414047;
margin-bottom: 30px;
span{
    font-size: 16px;
color: #587BE0;
display: block
}
`;


    const BtnCustom = styled(Button)`
    display: flex;
    align-items: center;
    padding: 0px 10px 0px 20px;
    background: ${(formik.values.accountId && formik.values.fullName) ? '#885FFF' : '#BEBEC2'} !important;
    color: #fff;
    border-radius: 10px;
    min-width: 124px;
    height: 40px;
    margin-top:20px;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    text-transform: none
`

    return (
        <div css={container}>
            <p css={textStyle}>
                Enter an Account ID to use with your NEAR account. Your Account ID will be used for all NEAR operations, including sending and receiving assets.

            </p>
            <form onSubmit={formik.handleSubmit}>
                <>
                    <InputLabel shrink htmlFor="fullName">
                        Full Name
                    </InputLabel>
                    <Box
                        sx={{
                            borderRadius: '8px',
                            border: !formik.values.fullName ? '2px solid #828282' : '2px solid #885FFF',
                            '& > :not(style)': {
                                m: 1,
                            },
                        }}
                    >

                        <Input
                            name="fullName"
                            fullWidth
                            disableUnderline={true}
                            id="fullName"
                            aria-label="fullName"
                            placeholder={'EX John'}
                            onChange={formik.handleChange}
                            value={formik.values.fullName}
                            error={formik.touched.fullName && Boolean(formik.errors.fullName)}
                        />
                    </Box>
                    <FormHelperText sx={{ color: 'red', paddingBottom: '20px' }}>{formik.touched.fullName && formik.errors.fullName}</FormHelperText>

                </>

                <>
                    <InputLabel shrink htmlFor="accountId">
                        Account Id
                    </InputLabel>
                    <Box
                        sx={{
                            borderRadius: '8px',
                            border: !formik.values.accountId ? '2px solid #828282' : '2px solid #885FFF',
                            '& > :not(style)': {
                                m: 1,
                            },
                        }}
                    >

                        <Input
                            name="accountId"
                            fullWidth
                            disableUnderline={true}
                            id="accountId"
                            aria-label="accountId"
                            placeholder={'username'}
                            onChange={formik.handleChange}
                            value={formik.values.accountId}
                            error={formik.touched.accountId && Boolean(formik.errors.accountId)}
                        />
                    </Box>
                    <FormHelperText sx={{ color: 'red' }}>{formik.touched.accountId && formik.errors.accountId}</FormHelperText>

                </>

                <div css={centerContainer}>
                    <BtnCustom type='submit' name='Continue' onClick={formik.submitForm} endIcon={<ChevronRight style={{ fontSize: 30 }} />}>{'Continue'}</BtnCustom>
                </div>
            </form>
            <p css={termsConditions}>
                By creating a NEAR account, you agree to the NEAR Wallet
                <a href='#'>Terms of Services</a> and <a href='#'>Privacy Policy</a>.
            </p>
            <hr />

            <LogInWithNearSection />
        </div >
    )

};

export default NearSignupFormBody;

