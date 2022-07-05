
import styled from '@emotion/styled';
import { Button } from '@mui/material';
import ChevronRight from '@mui/icons-material/ChevronRight';

type BtnProps = {
    title: string;
    color: string;

};

const Btn = (props: BtnProps) => {

    const BtnCustom = styled(Button)`
    display: flex;
    align-items: center;
    padding: 0px 10px 0px 20px;
    background: ${props.color} !important;
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
        <BtnCustom endIcon={<ChevronRight style={{fontSize: 30}} />}>{props.title}</BtnCustom>
    )

};

export default Btn;