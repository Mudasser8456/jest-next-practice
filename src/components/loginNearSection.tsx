
import CustomButton from '../components/Button';
import { css } from '@emotion/react'
import Link from 'next/link';



const LogInWithNearSection = () => {

    const alreadyAccountTxt = css`
font-style: normal;
font-weight: 500;
font-size: 14px;
line-height: 19px;
text-align: center;
color: #414047;
margin-top: 30px;
margin-bottom: 0px;
`;

    const centerContainer = css`
width: 100%;
background-color: '#fff';
justify-content: center;
display: flex;
`;


    return (
        <>
            <p css={alreadyAccountTxt}>
                Already have NEAR account?
            </p>

            <Link href='/loginWithNear'>
                <div css={centerContainer}>
                    <CustomButton title={'Log in with NEAR'} color={'#414047'} />
                </div>
            </Link>
        </>
    )

};

export default LogInWithNearSection;