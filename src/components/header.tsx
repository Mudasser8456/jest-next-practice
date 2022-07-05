import Image from 'next/image'
import Link from 'next/link'
import styled from '@emotion/styled'
import { Grid } from '@mui/material'
import crossIcon from '../assets/icons/crossIcon.svg';
import { css } from '@emotion/react';


type HeaderProps = {
    title: string;
};

const Header = (props: HeaderProps) => {

    const Container = styled.div`
  height: 70px;
  position:fixed; 
  width: 100%;
  background-color: #F5F5F5;
  display: flex;
  justify-content: center;
  align-items: center;
`
    const Heading = styled.p`
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 22px;
    letter-spacing: -0.408px;
    color: #000000;
`
 const centerContainer = css`
width: 100%;
background-color: '#fff';
justify-content: center;
display: flex;
`;

    return (
        <Container >
            <Grid container>
                <Grid item xs={2} />
                <Grid item xs={8} css={centerContainer}>
                    <Heading>{props?.title}</Heading>
                </Grid>
                <Grid item xs={2} css={centerContainer}>
                    <Link href='/'><Image src={crossIcon} alt='cancel' /></Link>
                </Grid>
            </Grid>
        </Container>
    )

};

export default Header;