
import { css } from '@emotion/react';

export const btn = (type: boolean) => css`
background-color: #FCFCFC;
width: 66px;
height: 30px;
justify-content: center;
align-items: center;
display: flex;
padding: 6px 12px;
margin-right: 5px;
border-radius: 10px;
${type && `
border: 1px solid #BEBEC2;
`}
`;

export const container = css`
height: 100vh;
width: 100%;
background-color: '#fff';
padding: 70px 30px;
`;

export const btnContainer = css`
height: 60px;
width: 100%;
background-color: '#fff';
justify-content: center;
display: flex;
margin: 20px 0px;
`;

export const centerContainer = css`
width: 100%;
background-color: '#fff';
justify-content: center;
display: flex;
`;

export const termsConditions = css`
text-align: center;
margin-bottom: 30px;
margin-top: 30px;
font-size: 12px;
a{
    color: #587BE0
}
    
`;



