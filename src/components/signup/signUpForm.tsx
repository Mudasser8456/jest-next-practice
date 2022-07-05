import React, { useState } from 'react';
import { btn, container, btnContainer, centerContainer, termsConditions } from './signupForm.styles';
import { Button, Input, Box, FormHelperText } from '@mui/material'
import ChevronRight from '@mui/icons-material/ChevronRight';
import styled from '@emotion/styled';
import { IMaskInput } from 'react-imask';
import { useFormik } from "formik";
import * as yup from "yup";
import {
    useAppDispatch,
} from '../../app/hooks';
import { submitForm } from '../../features/auth/authSlice'
import {useRouter} from 'next/router';
import LoginWithNear from '../../components/loginNearSection';

interface CustomProps {
    onChange: (event: { target: { name: string; value: string } }) => void;
    name: string;
}

const TextMaskCustom = React.forwardRef<HTMLElement, CustomProps>(
    function TextMaskCustom(props, ref) {
        const { onChange, ...other } = props;
        return (
            <IMaskInput
                {...other}
                mask="(#00) 000-0000"
                definitions={{
                    '#': /[1-9]/,
                }}
                // inputRef={ref}
                onAccept={(value: any) => onChange({ target: { name: props.name, value } })}
                overwrite
            />
        );
    },
);





const SignUpForm: React.FC = (props) => {
    const dispatch = useAppDispatch();
    const router = useRouter()
    const [type, setType] = useState<string>('email');

    const validationSchema = yup.object(type === 'phone' ? {
        phone: yup.string().required('field required')
    } : {
        email: yup.string().required('field required').email('email is not valid')

    });

    interface EmailFormValues {
        email: string;
    }
    interface PhoneFormValues {
        phone: string;
    }

    const emailValues: EmailFormValues = {
        email: ''
    }
    const phoneValues: PhoneFormValues = {
        phone: ''
    }

    const formik = useFormik({
        initialValues: {
            [type]: ''
        },
        validationSchema: validationSchema,
        onSubmit: async (values) => {
            console.log(values);
            dispatch(submitForm({ type, value: values[type] }))
            router.push('/codeVerification')
        },
    });


    const BtnCustom = styled(Button)`
    display: flex;
    align-items: center;
    padding: 0px 10px 0px 20px;
    background: ${(formik.values.email || formik.values.phone) ? '#885FFF' : '#BEBEC2'} !important;
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
            <div css={btnContainer}>
                <div css={btn(type === 'email' ? true : false)} onClick={() => setType('email')} ><p>Email</p></div>
                <div css={btn(type === 'phone' ? true : false)} onClick={() => setType('phone')} ><p>Phone</p></div>
            </div>
            <form onSubmit={formik.handleSubmit}>
                {type === 'phone' && <><Box
                    sx={{
                        borderRadius: '8px',
                        border: !formik.values.phone ? '2px solid #828282' : '2px solid #885FFF',
                        '& > :not(style)': {
                            m: 1,
                        },
                    }}
                >
                    <Input
                        name="phone"
                        fullWidth
                        disableUnderline={true}
                        id="formatted-text-mask-input"
                        inputComponent={TextMaskCustom as any}
                        placeholder={'EX (100) 000-0000'}
                        onChange={formik.handleChange}
                        value={formik.values.phone}
                        error={formik.touched.phone && Boolean(formik.errors.phone)}
                    />
                </Box>
                    <FormHelperText sx={{ color: 'red' }}>{formik.touched.phone && formik.errors.phone}</FormHelperText>

                </>
                }
                {type === 'email' && <><Box
                    sx={{
                        borderRadius: '8px',
                        border: !formik.values.email ? '2px solid #828282' : '2px solid #885FFF',
                        '& > :not(style)': {
                            m: 1,
                        },
                    }}
                >
                    <Input
                        fullWidth
                        disableUnderline={true}
                        placeholder='johndoe@gmail.com'
                        onChange={formik.handleChange}
                        name='email'
                        aria-label='email'
                        value={formik.values.email}
                        error={formik.touched.email && Boolean(formik.errors.email)}
                    />
                </Box>
                    <FormHelperText sx={{ color: 'red' }}>{formik.touched.email && formik.errors.email}</FormHelperText>
                </>
                }
                <div css={centerContainer}>
                    <BtnCustom type='submit' endIcon={<ChevronRight style={{ fontSize: 30 }} />}>{'Continue'}</BtnCustom>
                </div>
            </form>
            <p css={termsConditions}>
                by clicking continue you must agree to near labs <a href='#'>Terms & Conditions</a> and <a href='#'>Privacy Policy</a>
            </p>
            <hr />

           <LoginWithNear />
        </div >
    )

};

export default SignUpForm;

